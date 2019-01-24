import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
