import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  @Input() nomPostList: string;
  @Input() textePostList: string;
  @Input() newDate: string;
  @Input() indexSupp: string;
  @Input() nbreIts:number;

  constructor() {


   }

  ngOnInit() {
  }



}
