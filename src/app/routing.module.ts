import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'callback', component:CallbackComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'objetos', component:ObjetosComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
