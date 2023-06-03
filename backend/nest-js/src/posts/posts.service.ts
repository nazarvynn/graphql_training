import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PubSub } from 'graphql-subscriptions';

import { CreatePostInput, UpdatePostInput } from './dto';
import { Post, PostConnection } from './entities';
import { CommentsService } from 'src/comments/comments.service';

const pubSub = new PubSub();

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private readonly commentsService: CommentsService
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id): Promise<Post> {
    return this.postRepository.findOneOrFail(id);
  }

  async postsPaginated(page, pageSize): Promise<PostConnection> {
    const skip = (page - 1) * pageSize;
    const data = await this.postRepository.find({ skip, take: pageSize });
    const total = await this.postRepository.count();
    const pages = Math.ceil(total / pageSize);

    return { data, info: { page, pages, total } };
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    return this.postRepository.save(createPostInput);
  }

  async update(id, updatePostInput: UpdatePostInput): Promise<Post> {
    const post = await this.postRepository.findOne(id);
    return this.postRepository.save({ ...post, ...updatePostInput });
  }

  async remove(id): Promise<Post> {
    const post = await this.postRepository.findOne(id);
    await pubSub.publish('postDeleted', { postDeleted: post });
    await this.commentsService.removeAllByPostId(id);

    return this.postRepository.remove(post);
  }
}
