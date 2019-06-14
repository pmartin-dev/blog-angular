import { AddDeletePostService } from './services/add-delete-post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'nouveau', component: NewPostComponent},
  { path: 'posts', component: BlogViewComponent},
  { path: '', component: BlogViewComponent},
  { path: 'not-found', component: FourOFourComponent},
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    BlogViewComponent,
    FourOFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AddDeletePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
