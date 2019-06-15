import { AddDeletePostService } from './../services/add-delete-post.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() nomPostListItem:string;
  @Input() textePostListItem:string;
  @Input() newDate:string;
  @Input() indexSupp:number;

  nomPost = "Titre du poste";
  textPost = "Texte";
  nbrenotloves:number = 0;
  nbreloves:number = 0;
  lovedStatus:number = 3;

  constructor(private addDeletePostService: AddDeletePostService) { }

  ngOnInit() {
  }

  onPlusLove(){
    this.nbreloves += 1;
  }

  onMoinsLove(){
    this.nbrenotloves += 1;
  }

  onDeletePost(){
    this.addDeletePostService.deletePost(this.indexSupp);
  }

}
