import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../models/userResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service1Service implements OnInit {

  results = '';
  data: any = [];
  id: any;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data)
    });

  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/2.json")
  }

  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.myjson.com/bins/1ey8z0').subscribe(data => {
      console.log(data);
      console.log(data[this.id]);
      console.log(data.username);
      console.log(data.email);
    });

    //   fetch('https://api.myjson.com/bins/1ey8z0')
    // .then(response => response.json())
    // .then(json => console.log(json))

  }
}
