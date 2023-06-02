import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { Post } from './entities';
import { CreatePostInput, UpdatePostInput } from './dto';
import { PostsService } from 'src/posts/posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: 'posts' })
  findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  createPost(@Args('createPostInput') createPostInput: CreatePostInput): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput): Promise<Post> {
    return this.postsService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postsService.remove(id);
  }
}
