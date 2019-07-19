import { TestBed } from '@angular/core/testing';

import { VideoService } from './video-service.service';

describe('VideoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoService = TestBed.get(VideoService);
    expect(service).toBeTruthy();
  });
});
