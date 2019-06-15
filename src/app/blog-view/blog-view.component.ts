import { AddDeletePostService } from './../services/add-delete-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  posts = [];

  constructor(private addDeletePostService: AddDeletePostService) { }
  

  ngOnInit() {
    this.addDeletePostService.getPostsFromServer()
    .subscribe(
      response => {
        this.posts = response;
        console.log('Récupération terminée !', response); },
      error => {console.log('erreur de récupération!', error); }
    )}
}
