import { TestBed } from '@angular/core/testing';

import { WatchlecturesService } from './watchlectures.service';

describe('WatchlecturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatchlecturesService = TestBed.get(WatchlecturesService);
    expect(service).toBeTruthy();
  });
});
