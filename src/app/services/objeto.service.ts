import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Objeto } from './objeto';

@Injectable()
export class ObjetoService {

  private objetosUrl:string = 'http://cadastros.dev/api/objetos';

  private headers = new Headers({
      "Authorization": localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'),
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  private options = new RequestOptions({headers: this.headers, withCredentials: true});

  constructor(private http:Http) { }

  getObjetos():Observable<Objeto[]>{
    return this.http
      .get(this.objetosUrl, this.options)
      .map(res => res.json() as Objeto[])
      .catch((error:any) => Observable.throw(error));
  }

  storeObjeto(objeto:string, categoria:string):Observable<Objeto>{
    return this.http
      .post(this.objetosUrl, JSON.stringify({'name':objeto, 'categoria_id': categoria}), this.options)
      .map(res => res.json() as Objeto)
      .catch((error:any) => Observable.throw(error));
  }

  deleteObjeto(id:string){
    return;
  }

}
