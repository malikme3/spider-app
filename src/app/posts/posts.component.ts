import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts = null;

  // 1) first injecting HttpClient service in to constructor
  // 2)  overwriding posts variable value with httpClient function response
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts/4').subscribe(response => {
      this.posts = response;
    });

    this.http.get('http://localhost:3000/hello').subscribe(res => {
      console.log('Response from hello: ', res);
    });
  }
}
