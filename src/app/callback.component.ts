import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'callback-component',
  template: `<span *ngIf="!code">carregando...</span>`,
  providers: [LoginService]
})
export class CallbackComponent implements OnInit{
  constructor(private route:ActivatedRoute, private login:LoginService){}

  code:string;
  token:string;

  getToken(code:string):void{
    this.login.getToken(code);
  }

  ngOnInit():void{
    this.code = this.route.snapshot.queryParams['code'];
    this.getToken(this.code);
  }
}
