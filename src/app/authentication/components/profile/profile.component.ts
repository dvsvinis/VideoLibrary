import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import { HttpClient, HttpEventType} from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  selectedFile: File = null;

  constructor(private userService: UserService, private router: Router, private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
  }

  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://showboatvideos.s3.us-east-2.amazonaws.com/uploadFile', fd, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
    } else if (event.type === HttpEventType.Response) {
      console.log(event);
    }
    });
  }
}
