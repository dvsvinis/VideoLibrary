import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment';

export class User {
  constructor(
  public id: string,
  public username: string,
  public email: string,
  public password: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.serverURL + '/users';
  }

  getUsers()
  {
    console.log("test call");
    return this.httpClient.get<User[]>(this.url);
  }

  public deleteUser(user) {
    return this.httpClient.delete<User>(this.url + '/' + user.id);
  }

  public addUser(user) {
    return this.httpClient.post<User>(this.url, user);
  }

}
