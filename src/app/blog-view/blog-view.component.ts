import { AddDeletePostService } from './../services/add-delete-post.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor(private addDeletePostService: AddDeletePostService) { }

  emitPost() {
    this.postSubject.next(this.posts);
  }
  

  ngOnInit() {
    this.addDeletePostService.getPostsFromServer()
    .subscribe(
      response => {
        this.posts = response;
        console.log('Récupération terminée !', response); },
      error => {console.log('erreur de récupération!', error); }
    )}
}
