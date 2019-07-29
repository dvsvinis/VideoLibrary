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

// import { UserComponent } from './components/user/user.component';
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserFormComponent } from './components/user-form/user-form.component';
// import { LoginComponent } from './components/login/login.component';
// import { LogoutComponent } from './components/logout/logout.component';
// import { AuthGoodService } from './services/auth-good.service';
// import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'videos', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
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
  // public error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},
  { path: 'videos', component: VideoListComponent },
  { path: 'addvideo', component: VideoFormComponent },
  { path: 'comments', component: commentListComponent },
  { path: 'addcomments', component: CommentFormComponent },
  { path: 'home', component: HomeComponent }
];

  // { path: '', component: UserComponent,canActivate:[AuthGoodService] },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'adduser', component: UserFormComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'logout', component: LogoutComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'users', component: UserListComponent },
  // { path: 'logout', component: LogoutComponent,canActivate:[AuthGoodService] },
  // { path: 'adduser', component: AddUserComponent,canActivate:[AuthGoodService]},

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

