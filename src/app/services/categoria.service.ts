import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Categoria } from './categoria';

@Injectable()
export class CategoriaService{
  private categoriaUrl = 'http://cadastros.dev/api/categorias'; // ?callback=JSONP_CALLBACK

  private headers = new Headers({
      "Authorization": localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'),
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  private options = new RequestOptions({headers: this.headers, withCredentials: true});

  constructor(private jsonp:Jsonp, private http:Http){}

  getCategorias(): Observable<Categoria[]>{
    return this.http.get(this.categoriaUrl, this.options) // this.jsonp
      .map((res:Response) => {
          return res.json() || {};
        })
      .catch((error:any) => Observable.throw(error));
  }
}
