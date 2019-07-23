import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Comment } from '../model/comment';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CommentService {

  private commentsUrl: string;

  constructor(private http: HttpClient) {
    this.commentsUrl = environment.serverURL + '/comments';
  }

  public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  public save(comments: Comment) {
    return this.http.post<Comment>(this.commentsUrl, comments);
  }
}

