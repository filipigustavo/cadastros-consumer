import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Token } from './token';

@Injectable()
export class LoginService{
  private loginUrl = 'http://cadastros.dev/oauth/token';

  private handleError(error: any): Promise<any>{
    console.error('An error ocurred!', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers();

  constructor(private http:Http){}

  getToken(code:string):Promise<Token>{
    // this.headers.append('X-CSRF-TOKEN', 'X-CSRF-TOKEN');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    let data = new URLSearchParams();
        data.append('grant_type', 'authorization_code');
        data.append('client_id', '3');
        data.append('client_secret', 'Tko1NWWnd9Upmofk2sKZDZ5HfyqrqpUhJI8XIeBD');
        data.append('redirect_uri', 'http://localhost:4200/callback');
        data.append('code', code);

    return this.http
      .post(this.loginUrl, data, {headers:this.headers})
      .toPromise()
      .then(res => res.json().data as Token)
      .catch(this.handleError);
  }
}
