import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Categoria } from './categoria';

@Injectable()
export class CategoriaService{
  private categoriaUrl = 'http://cadastros.dev/api/categorias?callback=JSONP_CALLBACK';

  constructor(private jsonp:Jsonp){}

  getCategorias(): Observable<Categoria[]>{
    return this.jsonp.get(this.categoriaUrl)
      .map(function(res:Response){
          return res.json() || {};
        })
      .catch(function(error:any){return Observable.throw(error);});
  }
}
