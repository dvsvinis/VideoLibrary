import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CommentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  private commentsUrl: string;

  constructor(private http: HttpClient) {
    this.commentsUrl = environment.serverURL + '/comments/';
  }

  public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  public save(comments: Comment, videoId: number) {
    return this.http.post<Comment>(this.commentsUrl + videoId, comments, this.httpOptions);
  }
}

