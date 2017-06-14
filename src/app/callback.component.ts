import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './services/login.service';
import { Token } from './services/token';

@Component({
  selector: 'callback-component',
  template: `<span *ngIf="!code">carregando...</span>`,
  providers: [LoginService]
})
export class CallbackComponent implements OnInit{
  constructor(private router:Router, private route:ActivatedRoute, private login:LoginService){}

  code:string;
  token:Token;

  getToken(code:string):void{
    this.login.getToken(code).then(res => {
      this.token = res;

      // console.log(this.token);
      localStorage.setItem('access_token', this.token.access_token);
      localStorage.setItem('expires_in', this.token.expires_in.toString());
      localStorage.setItem('refresh_token', this.token.refresh_token);
      localStorage.setItem('token_type', this.token.token_type);

      this.router.navigate(['/categorias']);
    });
  }

  ngOnInit():void{
    this.code = this.route.snapshot.queryParams['code'];

    if(!this.code){
      this.router.navigate(['/']);
    }

    this.getToken(this.code);
  }
}
