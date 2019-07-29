import { Component } from '@angular/core';
import {UserService} from './authentication/services/user.service';
import {User} from './authentication/models/user';
import {Role} from './authentication/models/role';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-user-management';
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }
}
