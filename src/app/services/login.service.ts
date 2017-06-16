import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Token } from './token';
import { User } from './user';

@Injectable()
export class LoginService{
  private loginUrl = 'http://cadastros.dev/oauth/token';

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({"Content-Type": "application/json", "Accept": "application/json"});

  constructor(private http:Http){}

  getToken(code:string):Promise<Token>{
    let dataJSON = {
      'grant_type': 'authorization_code',
      'client_id': '3',
      'client_secret': 'Tko1NWWnd9Upmofk2sKZDZ5HfyqrqpUhJI8XIeBD',
      'redirect_uri': 'http://localhost:4200/callback',
      'code': code
    }

    return this.http
      .post(this.loginUrl, JSON.stringify(dataJSON), {headers:this.headers, withCredentials:true})
      .toPromise()
      .then(res => {
        return res.json() as Token
      })
      .catch(this.handleError);
  }

  getUser():Promise<User>{
    this.headers.append("X-Requested-With", "XMLHttpRequest");
    this.headers.append("Authorization", localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'));

    return this.http.get('http://cadastros.dev/api/user', {headers:this.headers, withCredentials:true})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }
}
