import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { Token } from './token';
import { User } from './user';

@Injectable()
export class LoginService{
  private loginUrl = environment.apiOauth + 'token';

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({"Content-Type": "application/json", "Accept": "application/json"});

  constructor(private http:Http){}

  getToken(data:any):Promise<Token>{
    let dataJSON = {
      'grant_type': data.grant_type,
      'client_id': data.client_id,
      'client_secret': data.client_secret,
      'redirect_uri': data.redirect_uri,
      'code': data.code
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

    return this.http.get(environment.apiUrl + 'user', {headers:this.headers, withCredentials:true})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }
}
