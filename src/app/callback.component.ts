import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';
import { LoginService } from './services/login.service';
import { Token } from './services/token';

@Component({
  selector: 'callback-component',
  templateUrl: './callback.component.html',
  providers: [LoginService]
})
export class CallbackComponent implements OnInit{
  constructor(private router:Router, private route:ActivatedRoute, private login:LoginService){}

  formCode = {
    grant_type: 'authorization_code',
    client_id: '',
    client_secret: '',
    redirect_uri: environment.baseUrl + 'callback',
    code: ''
  }
  token:Token;

  getToken():void{
    this.login.getToken(this.formCode).then(res => {
      this.token = res;

      localStorage.setItem('access_token', this.token.access_token);
      localStorage.setItem('expires_in', this.token.expires_in.toString());
      localStorage.setItem('refresh_token', this.token.refresh_token);
      localStorage.setItem('token_type', this.token.token_type);

      this.getUser();

      this.router.navigate(['/categorias']);
    });
  }

  getUser():void{
    this.login.getUser().then(res => {
      localStorage.setItem('user_id', res.id.toString());
      localStorage.setItem('user_email', res.email);
      localStorage.setItem('user_name', res.name);
    });
  }

  ngOnInit():void{
    this.formCode.code = this.route.snapshot.queryParams['code'];

    if(!this.formCode.code){
      this.router.navigate(['/login']);
    }
  }
}
