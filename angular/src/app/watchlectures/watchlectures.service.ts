import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class WatchlecturesService {

  private _url: string = "../../../raw_videos";

  constructor(private http: HttpClient) { }
  /*
  getVideos() {
    return this.http.get();

  }
  */
}
