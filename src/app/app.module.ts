import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';
import { BuisnessNewsComponent } from './buisness-news/buisness-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    BuisnessNewsComponent,
    SportsNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoadingBarHttpClientModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
