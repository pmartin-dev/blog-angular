import { AddDeletePostService } from './../services/add-delete-post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private addDeletePostService: AddDeletePostService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const title = form.value['titre'];
    const corps = form.value['corps'];

    this.addDeletePostService.addPost(title, corps);
    // this.addDeletePostService.savePostsToServer();
    this.router.navigate(['/posts']);
    // this.addDeletePostService.savePostsToServer();
  }
}
