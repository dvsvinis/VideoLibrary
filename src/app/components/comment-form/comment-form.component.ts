import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../../model/comment';
import {CommentService} from '../../services/comment-service.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  comment: Comment;
  videoId: number; 

  constructor(private route: ActivatedRoute, private router: Router, private commentService: CommentService) {
    this.comment = new Comment();
  }

  onSubmit() {
    console.log( this.comment);
    this.commentService.save(this.comment,this.videoId).subscribe(result => this.gotoCommentList());
  }

  gotoCommentList() {
    this.router.navigate(['/comments']);
  }

g
}

