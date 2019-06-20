import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AddDeletePostService {
  

  constructor (private httpClient: HttpClient, private router: Router) {}

    date = new Date();

    deletePost(id:number){
      
      this.getPostsFromServer()
    .subscribe(
      response => {
        let posts = response;
        posts.splice(id, 1);
        

      this.httpClient
      .put('https://http-client-demo-3228b.firebaseio.com/posts.json', posts)
      .subscribe();
    },
      error => {console.log('erreur de récupération!', error); },
    )}


    addPost(title:string, corps:string){
      this.getPostsFromServer()
    .subscribe(
      response => {
        let posts = response;
        
        const postObject = {
          id: 0,
          title: '',
          content: '',
          loveIts: 0,
          created_at: this.date
         };
        postObject.title = title;
        postObject.content = corps;
        postObject.id = posts[(posts.length - 1)].id + 1;
        posts.push(postObject);

        this.httpClient
        .put('https://http-client-demo-3228b.firebaseio.com/posts.json', posts)
        .subscribe(
          () => {
            this.router.navigate(['/posts']);
          }
        )
      },
      error => {console.log('erreur de récupération!', error); }
    )


    }

    savePostsToServer() {
      let posts;
      this.httpClient
      .put('https://http-client-demo-3228b.firebaseio.com/posts.json', posts)
      .subscribe(
        response => {console.log('Enregistrement terminé !'); },
        error => {console.log('erreur de sauvegarde!', error); }
      )}

    getPostsFromServer(){
      return this.httpClient.get<any []>('https://http-client-demo-3228b.firebaseio.com/posts.json');
    }
}