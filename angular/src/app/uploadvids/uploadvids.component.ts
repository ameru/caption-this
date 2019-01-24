import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploadvids',
  templateUrl: './uploadvids.component.html',
  styleUrls: ['./uploadvids.component.css']
})
export class UploadvidsComponent implements OnInit {

  /*
  title: String = "";
  constructor(private http: HttpClient, private router: Router) { }
  */

  ngOnInit() {
    $(document).ready(function(){
      $("#submit").submit(function(){setTimeout(function() {
        window.location.replace('/watchlectures');
      },1500);});
    });
  }

  /*
  uploadvids() {
      this.http.post('/uploadvids', {title:this.title}).toPromise().then((res) => 
      {
        console.log(res);
        this.router.navigate(['/watchlectures']);
      })
  }
  */

}
