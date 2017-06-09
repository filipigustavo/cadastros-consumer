import { Component, OnInit } from '@angular/core';

import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoriaService]
})
export class AppComponent {
  title = 'Cadastro consumer';
  token:string;
  categorias:Categoria[];

  constructor(private categoriaService:CategoriaService){}

  getCategorias():void{
    this.categoriaService.getCategorias().subscribe(data => this.categorias = data);
  }

  ngOnInit():void{
    this.getCategorias();
  }
}
