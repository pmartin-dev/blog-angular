import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  date = new Date();

  posts= [{
    title: 'Mon premier post',
    content: 'Tempor sit elit dolore laboris Lorem tempor sint tempor eu fugiat veniam qui elit anim. Esse est consectetur incididunt.',
    loveIts: 'nombre1',
    created_at: this.date,
  }, {
    title: 'Mon deuxième post',
    content: 'Laborum et reprehenderit esse esse non. Ea irure amet ea mollit Lorem commodo enim reprehenderit. Enim sit voluptate sint velit eiusmod.',
    loveIts: 'nombre2',
    created_at: this.date
  },{
    title: 'Mon troisième post',
    content: 'Minim nostrud commodo consectetur esse nisi labore. Veniam nostrud adipisicing dolor quis officia dolor irure excepteur dolore.',
    loveIts: 'nombre2',
    created_at: this.date
  }];

}
