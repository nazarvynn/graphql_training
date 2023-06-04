import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { AboutComponent } from 'src/app/about/about.component';
import { PostsComponent } from 'src/app/posts/posts.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  // {
  //   path: 'posts/:id',
  //   component: PostComponent,
  // },
  // {
  //   path: 'gallery',
  //   component: GalleryComponent,
  // },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
