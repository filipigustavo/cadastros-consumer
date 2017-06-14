import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:AppComponent},
  {path:'callback', component:CallbackComponent},
  {path:'categorias', component:CategoriasComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
