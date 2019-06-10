export class AddDeletePostService {

    date = new Date();

  posts= [{
    id: 1,
    title: 'Mon premier post',
    content: 'Tempor sit elit dolore laboris Lorem tempor sint tempor eu fugiat veniam qui elit anim. Esse est consectetur incididunt.',
    loveIts: 0,
    created_at: this.date,
  }, {
    id: 2,
    title: 'Mon deuxième post',
    content: 'Laborum et reprehenderit esse esse non. Ea irure amet ea mollit Lorem commodo enim reprehenderit. Enim sit voluptate sint velit eiusmod.',
    loveIts: 0,
    created_at: this.date
  },{
    id: 3,
    title: 'Mon troisième post',
    content: 'Minim nostrud commodo consectetur esse nisi labore. Veniam nostrud adipisicing dolor quis officia dolor irure excepteur dolore.',
    loveIts: 0,
    created_at: this.date
  }];

    deletePost(id:number){
      this.posts.delete(this.posts[id]);
    }

    addPost(title:string, corps:string){
        const postObject = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: this.date
        };
        postObject.title = title;
        postObject.content = corps;
        
        postObject.id = this.posts[(this.posts.length - 1)].id + 1;
        this.posts.push(postObject);
    }

}