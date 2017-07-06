import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router: Router) { }

  oAuth = environment.apiOauth;

  formCode = {
    client_id: '',
    redirect_uri: environment.baseUrl + 'callback',
    response_type: 'code',
    scope: ''
  }

  ngOnInit():void{
    if(localStorage.access_token){
      this.router.navigate(['/']);
    }
  }

}
