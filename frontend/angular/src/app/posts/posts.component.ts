import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/@shared/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  createTitle!: string;
  createBody!: string;
  editTitle!: string;
  editBody!: string;
  posts!: Post[];
  editPost!: Post | null;
  itemsPerPage = 3;
  isShownCreateModal = false;
  isShownEditModal = false;

  ngOnInit() {
    this.posts = [
      { id: 1, title: 'Post A', body: 'Text of post A' },
      { id: 2, title: 'Post B', body: 'Text of post B' },
      { id: 3, title: 'Post C', body: 'Text of post C' },
      { id: 4, title: 'Post D', body: 'Text of post D' },
      { id: 5, title: 'Post E', body: 'Text of post E' },
      { id: 6, title: 'Post F', body: 'Text of post F' },
      { id: 7, title: 'Post J', body: 'Text of post J' },
    ];
  }

  loadPosts(start: number, limit: number): void {
    // const URL = `/api/posts?_start=${start}&_limit=${limit}`;
    // this.httpClient.get<Post[]>(URL).subscribe((posts) => {
    //   this.posts = posts;
    // });
  }

  onPageChange({ page }: any): void {
    // this.loadPosts(this.itemsPerPage * page, this.itemsPerPage);
  }

  showDetails(post: Post): void {
    // this.router.navigate([`/posts/${post.id}`]);
  }

  showCreateModal(): void {
    this.isShownCreateModal = true;
  }

  hideCreateModal(): void {
    this.isShownCreateModal = false;
    this.createTitle = '';
    this.createBody = '';
  }

  createPost(): void {
    // const userId = 1;
    // const title = (this.createTitle || '').trim();
    // const body = (this.createBody || '').trim();
    //
    // if (!title || !body) {
    //   return;
    // }
    //
    // const URL = `/api/posts`;
    // this.httpClient.post<Post>(URL, { userId, title, body }).subscribe((post) => {
    //   const lastPost = last(this.posts);
    //   const nextId = lastPost ? lastPost!.id + 1 : post.id;
    //
    //   this.posts = [{ ...post, id: nextId }, ...this.posts];
    //   this.hideCreateModal();
    // });
  }

  showEditModal(post: Post): void {
    this.isShownEditModal = true;
    this.editTitle = post.title;
    this.editBody = post.body;
    this.editPost = post;
  }

  hideEditModal(): void {
    this.isShownEditModal = false;
    this.editTitle = '';
    this.editBody = '';
    this.editPost = null;
  }

  updatePost(): void {
    // const { id } = this.editPost || {};
    // const title = (this.editTitle || '').trim();
    // const body = (this.editBody || '').trim();
    //
    // if (!title || !body) {
    //   return;
    // }
    //
    // const URL = `/api/posts/${id}`;
    // this.httpClient.patch<Post>(URL, { ...this.editPost, title, body }).subscribe((updatedPost) => {
    //   this.posts = this.posts.map((p) => (p.id === updatedPost.id ? updatedPost : p));
    //   this.hideEditModal();
    // });
  }

  deletePost(post: Post): void {
    // const URL = `/api/posts/${post.id}`;
    //
    // this.httpClient.delete<void>(URL).subscribe(() => {
    //   this.posts = this.posts.map((p) => (p.id === post.id ? null : p)).filter(Boolean) as Post[];
    // });
  }
}
