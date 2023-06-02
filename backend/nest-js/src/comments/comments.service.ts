import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCommentInput, UpdateCommentInput } from './dto';
import { Comment } from './entities';

@Injectable()
export class CommentsService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) {}

  async findAll(): Promise<Comment[]> {
    return this.commentRepository.find();
  }

  async findOne(id): Promise<Comment> {
    return this.commentRepository.findOneOrFail(id);
  }

  async create(createCommentInput: CreateCommentInput): Promise<Comment> {
    return this.commentRepository.save(createCommentInput);
  }

  async update(id, updateCommentInput: UpdateCommentInput): Promise<Comment> {
    const comment = await this.commentRepository.findOne(id);
    return this.commentRepository.save({ ...comment, ...updateCommentInput });
  }

  async remove(id): Promise<Comment> {
    const comment = await this.commentRepository.findOne(id);
    return this.commentRepository.remove(comment);
  }
}
