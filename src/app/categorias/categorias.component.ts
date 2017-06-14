import { Component, OnInit } from '@angular/core';

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

  categorias:Categoria[];

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias():void{
    this.categoriaService.getCategorias().subscribe(data => this.categorias = data);
  }

}
