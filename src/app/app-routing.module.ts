import { PostsComponent } from './posts/posts.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';

const routes: Routes = [
{
  path:"",component:PostsComponent
},

{
  path:"Buisnessnews",component:BuisnessNewsComponent
},
{
  path:"Sportsnews",component:SportsNewsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
