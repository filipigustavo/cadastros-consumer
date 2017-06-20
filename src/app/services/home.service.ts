import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';
import { Post } from '../services/post';

@Injectable()
export class HomeService{
  constructor(private http:Http){}

  private headers = new Headers({
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Authorization": localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
  });

  postField(field:string):Promise<Post>{
    let postData = {
      postfield: field
    };

    return this.http
      .post(
        environment.apiUrl + 'receive-post',
        JSON.stringify(postData),
        {headers:this.headers}
      )
      .toPromise()
      .then(res => res.json() as Post)
      .catch((error:any):Promise<any> => Promise.reject(error.message || error));
  }
}
