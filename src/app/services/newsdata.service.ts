import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsdataService {
  baseUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ef82c26221634825b75fe55552185178'
  constructor(private http:HttpClient) { }
  news():Observable<any>{
  return this.http.get(this.baseUrl)
  }
  newsBuisness():Observable<any>{
  return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ef82c26221634825b75fe55552185178")
  }
  newsSports():Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ef82c26221634825b75fe55552185178")
    }
}
