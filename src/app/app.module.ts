import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Post } from './post.list/post.list.component';
import { Post } from './post.list.item/post.list.item.component';

@NgModule({
  declarations: [
    AppComponent,
    Post.ListComponent,
    Post.List.ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
