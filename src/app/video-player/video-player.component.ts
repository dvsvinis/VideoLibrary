import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../model/video';
import {VideoService} from '../services/video-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() video: Video;

  constructor(private videoService: VideoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVideo();
  }

  getVideo() {
    const id = +this.route.snapshot.paramMap.get('videoId');
    this.videoService.get(id).subscribe(video => this.video = video);
  }

}
