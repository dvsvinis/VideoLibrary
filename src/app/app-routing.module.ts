import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { commentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './authentication/components/login/login.component';
import {RegisterComponent} from './authentication/components/register/register.component';
import {ProfileComponent} from './authentication/components/profile/profile.component';
import {DetailComponent} from './authentication/components/detail/detail.component';
import {AdminComponent} from './authentication/components/admin/admin.component';
import {NotFoundComponent} from './authentication/components/not-found/not-found.component';
import {UnauthorizedComponent} from './authentication/components/unauthorized/unauthorized.component';
import {AuthGuard} from './authentication/guards/auth.guard';
import {Role} from './authentication/models/role';
import {User} from './authentication/models/user';
import {VideoPlayerComponent} from './video-player/video-player.component';

const routes: Routes = [
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'videoplayer', component: VideoPlayerComponent},
  // user+admin
  {path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path: 'detail/:id',
  component: DetailComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'addcomments',
  component: CommentFormComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER, Role.ADMIN]}
  },
  // {path: 'addvideo',
  // component: VideoListComponent,
  // canActivate: [AuthGuard],
  // data: {roles: [Role.USER, Role.ADMIN]}
  // },
  // public error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},
  { path: 'videos', component: VideoListComponent },
  { path: 'comments', component: commentListComponent },
  // { path: 'addcomments', component: CommentFormComponent },
  { path: 'addvideo', component: VideoFormComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    // For unknown pages
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
  }

