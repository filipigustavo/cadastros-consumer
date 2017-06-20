import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Categoria } from './categoria';

@Injectable()
export class CategoriaService{
  private categoriaUrl = 'http://cadastros.dev/api/categorias';

  private headers = new Headers({
      "Authorization": localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token'),
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Accept": "application/json"
    });
  private options = new RequestOptions({headers: this.headers, withCredentials: true});

  constructor(private http:Http){}

  getCategorias(): Observable<Categoria[]>{
    return this.http
      .get(this.categoriaUrl, this.options)
      .map((res:Response) => res.json() || {})
      .catch((error:any) => Observable.throw(error));
  }

  storeCategoria(categoria:any):Observable<Categoria>{
    return this.http
      .post(this.categoriaUrl, JSON.stringify({'name':categoria.name}), this.options)
      .map(res => res.json() as Categoria)
      .catch((error:any) => Observable.throw(error));
  }

  deleteCategoria(id:string):Observable<Categoria[]>{
    let url = this.categoriaUrl + '/' + id;
    return this.http
      .delete(url, this.options)
      .map(res => res.json() as Categoria[])
      .catch((error:any) => Observable.throw(error));
  }
}
