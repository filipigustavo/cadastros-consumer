import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.service';
import { Post } from '../services/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private home:HomeService) { }

  fieldValue:string;
  fieldResponse:Post;

  ngOnInit() {
  }

  enviarPost():void{
    this.home.postField(this.fieldValue).then(res => {
        return this.fieldResponse = res;
      });
  }

}
