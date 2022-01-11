import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../services/newsdata.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})
export class SportsNewsComponent implements OnInit {
  news: any;
  constructor(private newsData:NewsdataService){
    this.newsData.newsSports().subscribe((data)=>{
    this.news = data
  })
  }


  ngOnInit(): void {
  }

}
