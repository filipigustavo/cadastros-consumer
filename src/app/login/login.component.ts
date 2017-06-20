import { Component } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor() { }

  oAuth = environment.apiOauth;

  formCode = {
    client_id: '',
    redirect_uri: environment.baseUrl + 'callback',
    response_type: 'code',
    scope: ''
  }

}
