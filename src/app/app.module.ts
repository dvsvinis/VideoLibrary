import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoFormComponent } from './components/video-form/video-form.component';
import { VideoService } from './services/video-service.service';
import {CommentListComponent} from './components/comment-list/comment-list.component';
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
import { VideoPlayerComponent } from './video-player/video-player.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoFormComponent,
    VideoListComponent,
    CommentFormComponent,
    LoginComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    VideoPlayerComponent,
    CommentListComponent
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
