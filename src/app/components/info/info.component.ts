import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './../../models/userResponse';
import { HttpErrorResponse } from '@angular/common/http'
import { Service1Service } from 'src/app/services/service1.service';


@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent {

  results: any = [];
  data: any = [];
  // id:any=prompt('Enter the ID number');
  id1: any;
  results2: any=[];


  id:any;
  response:any;
  constructor(private http: HttpClient,
    private service: Service1Service) {
  }

  // get() {
  //   this.id1 = prompt('Enter the ID number');
  //   this.http.get<UserResponse>('https://api.myjson.com/bins/1ey8z0')
  //     .subscribe(
  //       data => {
  //         this.results = data;
  //         console.log(data);
  //         console.log(data[this.id1 - 1]);
  //         console.log(data[this.id1 - 1].username);
  //         console.log(data[this.id1 - 1].email);
  //       },
  //       (err: HttpErrorResponse) => {
  //         if (err.error instanceof Error) {
  //           console.log("Client-side error occured.");
  //         } else {
  //           console.log("Server-side error occured.");
  //         }
  //       }
//https://jsonplaceholder.typicode.com/users/
  get(){
    this.http.get('http://localhost:3000/details/' + this.id)
    .subscribe(
      response=>{
      this.results=response;
      console.log("Response",this.results);
    })
  }

    //   this.id1 = prompt('Enter the ID number');
    //   this.service.getJSON().subscribe(data => {
    //     console.log(data)
    //     console.log(data[this.id1 - 1]);
    //     console.log(data[this.id1 - 1].username);
    //     console.log(data[this.id1 - 1].email);
    // });

        //  fetch('https://api.myjson.com/bins/1ey8z0')
        // .then(response => response.json())
        // .then(json => console.log(json))
  //     );
  // }

  post() {
    const req = this.http.post('http://localhost:3000/details', {
      id: prompt("Enter ID"),
      name:prompt('Enter name'),
      username: prompt("Enter Username"),
      email: prompt("Enter Email"),
      address:prompt("Enter Address")
    // id:prompt("ID"),
    // body:prompt("Body"),
    // postId:prompt("POstId")
    })
      .subscribe(
        res => {
          this.results2=res;
          console.log(res);
        },
        err => {
          console.log("Error occured", err);
        }
      );
  }

  ngOnInit() {

  }

}