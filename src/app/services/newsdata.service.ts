import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsdataService {
  baseUrl = 'https://gnews.io/api/v4/top-headlines?token=07ba7258999f2c5436c3298dbe8b438e&lang=en'
  constructor(private http:HttpClient) { }
  news():Observable<any>{
  return this.http.get(this.baseUrl)
  }
  newsBuisness():Observable<any>{
  return this.http.get('https://gnews.io/api/v4/search?q=Microsoft&token=07ba7258999f2c5436c3298dbe8b438e&lang=en')

  }
  newsSports():Observable<any>{
    return this.http.get("https://gnews.io/api/v4/search?q=Cricket&token=07ba7258999f2c5436c3298dbe8b438e&lang=en")
    }
}
