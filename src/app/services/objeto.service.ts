import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { environment } from '../../environments/environment';
import { Objeto } from './objeto';

@Injectable()
export class ObjetoService {

  private objetosUrl:string = environment.apiUrl + 'objetos';

  private headers = new Headers({
      "Authorization": localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'),
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  private options = new RequestOptions({headers: this.headers, withCredentials: true});

  private errorHandle = (error:any) => Observable.throw(error);

  constructor(private http:Http) { }

  getObjetos():Observable<Objeto[]>{
    return this.http
      .get(this.objetosUrl, this.options)
      .map(res => res.json() as Objeto[])
      .catch(this.errorHandle);
  }

  storeObjeto(objeto:any):Observable<Objeto>{
    return this.http
      .post(this.objetosUrl, JSON.stringify({'name':objeto.name, 'categoria_id': objeto.categoria_id}), this.options)
      .map(res => res.json() as Objeto)
      .catch(this.errorHandle);
  }

  deleteObjeto(id:string){
    let url = this.objetosUrl + '/' + id;
    return this.http
      .delete(url, this.options)
      .map(res => res.json() as Objeto)
      .catch(this.errorHandle);
  }

}
