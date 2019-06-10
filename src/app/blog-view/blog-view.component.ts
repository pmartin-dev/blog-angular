import { AddDeletePostService } from './../services/add-delete-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  
  // date = new Date();

  // posts= [{
  //   id: 1,
  //   title: 'Mon premier post',
  //   content: 'Tempor sit elit dolore laboris Lorem tempor sint tempor eu fugiat veniam qui elit anim. Esse est consectetur incididunt.',
  //   loveIts: 'nombre1',
  //   created_at: this.date,
  // }, {
  //   id: 2,
  //   title: 'Mon deuxième post',
  //   content: 'Laborum et reprehenderit esse esse non. Ea irure amet ea mollit Lorem commodo enim reprehenderit. Enim sit voluptate sint velit eiusmod.',
  //   loveIts: 'nombre2',
  //   created_at: this.date
  // },{
  //   id: 3,
  //   title: 'Mon troisième post',
  //   content: 'Minim nostrud commodo consectetur esse nisi labore. Veniam nostrud adipisicing dolor quis officia dolor irure excepteur dolore.',
  //   loveIts: 'nombre2',
  //   created_at: this.date
  // }];


  constructor(private addDeletePostService: AddDeletePostService) { }
  posts = [];

  ngOnInit() {
    this.posts = this.addDeletePostService.posts;
  }

  

}
