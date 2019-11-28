import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  user = null;

  // 1- inject HttpClient service in constructor
  // 2- update user value with httpClient response data
  constructor(private http: HttpClient) {
    http
      .get('https://jsonplaceholder.typicode.com/users/4')
      .subscribe(response => {
        this.user = response;
      });
  }
}
