import { RESTDataSource } from '@apollo/datasource-rest';

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jsonplaceholder.typicode.com/';
  }

  async getPosts() {
    return await this.get('posts');
  }

  async getPostById(id: number) {
    return await this.get(`posts/${id}`);
  }

  async createPost(createPostInput: { title: string; body: string }) {
    return await this.post('posts', createPostInput);
  }

  async updatePost(id: number, updatePostInput: { title: string; body: string }) {
    return await this.put(`posts/${id}`, updatePostInput);
  }

  async deletePost(id: number) {
    return await this.delete(`posts/${id}`);
  }
}
