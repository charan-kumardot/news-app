import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../services/newsdata.service';

@Component({
  selector: 'app-buisness-news',
  templateUrl: './buisness-news.component.html',
  styleUrls: ['./buisness-news.component.css']
})
export class BuisnessNewsComponent implements OnInit {

  news: any;
  constructor(private newsData:NewsdataService){
    this.newsData.newsBuisness().subscribe((data)=>{
    this.news = data
  })
  }

  ngOnInit(): void {
  }


}
