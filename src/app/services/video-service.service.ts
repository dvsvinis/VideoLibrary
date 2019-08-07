import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Video } from '../model/video';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class VideoService {

  private videoUrl: string;

  constructor(private http: HttpClient) {
    this.videoUrl = environment.serverURL + '/api/video/';
  }

  public get(id: number): Observable<Video> {
    console.log(this.videoUrl + id);
    return this.http.get<Video>(this.videoUrl + id);
  }

  public findAll(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videoUrl);
  }

  public save(video: Video) {
    const formdata: FormData = new FormData();
    formdata.append('file', video.file);
    formdata.append('title', video.title);
    formdata.append('description', video.description);
    return this.http.post<Video>(this.videoUrl, formdata);
  }
}
