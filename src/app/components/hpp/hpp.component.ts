import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http'
import { Response } from './../../models/response';


@Component({
  selector: 'hpp',
  templateUrl: './hpp.component.html',
  styleUrls: ['./hpp.component.css']
})

export class HPPComponent {

  results: any = [];
  data: any = [];

  constructor(private http: HttpClient) { }

  get() {
    this.http.get<Response>('')
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
    const req = this.http.post('', {

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