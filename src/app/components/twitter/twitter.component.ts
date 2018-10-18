import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Twitter } from './../../models/twitter';
import { HttpErrorResponse } from '@angular/common/http'


@Component({
  selector: 'twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent {

  results: any = [];
  data: any = [];

  constructor(private http: HttpClient) {
  }

  get() {
    this.http.get<Twitter>('')
      .subscribe(
        data => {
          this.results = data;
          console.log(data);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
  }

  post() {
    const req = this.http.post('http://192.168.0.9:5000/predict', {



    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured", err);
        }
      );
  }

}