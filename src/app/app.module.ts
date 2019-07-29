import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { VideoService } from './services/video-service.service';
import { commentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentService } from './services/comment-service.service';

import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { ProfileComponent } from './authentication/components/profile/profile.component';
import { DetailComponent } from './authentication/components/detail/detail.component';
import { AdminComponent } from './authentication/components/admin/admin.component';
import { NotFoundComponent } from './authentication/components/not-found/not-found.component';
import { UnauthorizedComponent } from './authentication/components/unauthorized/unauthorized.component';
import { HomeComponent } from './components/home/home.component';

// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserFormComponent } from './components/user-form/user-form.component';
// import { UserService } from './services/user-service.service';
// import { LoginComponent } from './components/login/login.component';
// import { LogoutComponent } from './components/logout/logout.component';
// import { HeaderComponent } from './components/header/header.component';
// import { UserComponent } from './components/user/user.component';
// import { AddUserComponent } from './components/add-user/add-user.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoFormComponent,
    VideoListComponent,
    commentListComponent,
    CommentFormComponent,
    LoginComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnauthorizedComponent
    // UserListComponent,
    // UserFormComponent,
    // LogoutComponent,
    // HeaderComponent,
    // UserComponent,
    // AddUserComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
 providers: [VideoService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
