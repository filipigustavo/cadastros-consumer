import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../services/categoria';
import { ObjetoService } from '../services/objeto.service';
import { Objeto } from '../services/objeto';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css'],
  providers: [ObjetoService, CategoriaService]
})
export class ObjetosComponent implements OnInit {

  constructor(private objetoService:ObjetoService, private categoriaService:CategoriaService, private router: Router) { }

  objeto = {name: '',categoria_id: ''};
  objetos:Objeto[];
  categorias:Categoria[];

  ngOnInit():void {
    if(!localStorage.access_token){
      this.router.navigate(['/login']);
    }else{
      this.getObjetos();
      this.getCategorias();
    }

  }

  getCategorias():void{
    this.categoriaService
      .getCategorias()
      .subscribe(res => this.categorias = res);
  }

  getObjetos():void{
    this.objetoService
      .getObjetos()
      .subscribe(res => this.objetos = res);
  }

  storeObjeto():void{
    this.objetoService
      .storeObjeto(this.objeto)
      .subscribe(res => this.objetos.push(res));
  }

  deleteObjeto(id:string):void{
    this.objetoService
      .deleteObjeto(id)
      .subscribe(res => this.objetos = res);
  }

}
