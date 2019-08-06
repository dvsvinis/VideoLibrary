import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../model/video';
import {VideoService} from '../services/video-service.service';
import {ActivatedRoute} from '@angular/router';
import { CommentService } from '../services/comment-service.service';
import {Comment} from '../model/comment'

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() video: Video;
  comment: Comment; 

  constructor(private videoService: VideoService,
              private route: ActivatedRoute, private commentService: CommentService) { 
                this.comment = new Comment();
              }

  ngOnInit() {
    this.getVideo();
    
  }

  getVideo() {
    const id = +this.route.snapshot.paramMap.get('videoId');
    this.videoService.get(id).subscribe(video => this.video = video);
  }

  onSubmitComment() {
    console.log("comment.comment");
    this.commentService.save(this.comment,this.video.id).subscribe(result => this.commentService.findAll());
  }

}
