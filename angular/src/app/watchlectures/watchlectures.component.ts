import { urls } from './urls';
import { Component, OnInit, Input} from '@angular/core';
import videosDirectory from '../../../../raw_videos/videosDirectory.json';

@Component({
  selector: 'app-watchlectures',
  templateUrl: './watchlectures.component.html',
  styleUrls: ['./watchlectures.component.css'],
})
export class WatchlecturesComponent implements OnInit {
  @Input() fileDir: urls;

  directories: urls[] = videosDirectory.videos;

  constructor() { }

  ngOnInit() {
  }

}
