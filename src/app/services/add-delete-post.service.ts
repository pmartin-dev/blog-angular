import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AddDeletePostService {

  constructor (private httpClient: HttpClient) {}

    date = new Date();

    deletePost(id:number){

      this.getPostsFromServer()
    .subscribe(
      response => {
        let posts = response;

        // this.posts.delete(this.posts[id]);

      },
      error => {console.log('erreur de récupération!', error); }
    )





    }


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
        .subscribe()

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