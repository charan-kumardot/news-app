import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input } from '@angular/core';
import { NewsdataService } from './services/newsdata.service' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  
  
  constructor(){
  }


}
