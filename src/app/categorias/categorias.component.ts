import { Component, OnInit, Input } from '@angular/core';

import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../services/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [CategoriaService]
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriaService:CategoriaService) { }

  categoriaField:string;
  categorias:Categoria[];

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias():void{
    this.categoriaService
      .getCategorias()
      .subscribe(data => this.categorias = data);
  }

  storeCategoria():void{
    this.categoriaService
      .storeCategoria(this.categoriaField)
      .subscribe(res => {
        this.categorias.push(res);
        this.categoriaField = '';
      });
  }

  deleteCategoria(id:string):void{
    this.categoriaService
      .deleteCategoria(id)
      .subscribe(res => this.categorias = res);
  }

}
