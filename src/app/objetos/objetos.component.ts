import { Component, OnInit } from '@angular/core';

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

  constructor(private objetoService:ObjetoService, private categoriaService:CategoriaService) { }

  objetoField:string;
  categoriaField:string;
  objetos:Objeto[];
  categorias:Categoria[];

  ngOnInit():void {
    this.getObjetos();
    this.getCategorias();
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
      .storeObjeto(this.objetoField, this.categoriaField)
      .subscribe(res => this.objetos.push(res));
  }

  deleteObjeto(id:string):void{
    this.objetoService
      .deleteObjeto(id)
      .subscribe(res => this.objetos = res);
  }

}
