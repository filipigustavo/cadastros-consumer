import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';

const routes: Routes = [
  //{path:'', component:AppComponent},
  {path:'callback', component:CallbackComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
