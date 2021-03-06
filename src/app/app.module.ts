import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

import { xsrfFactory } from './xsrf.factory';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ObjetosComponent } from './objetos/objetos.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CategoriasComponent,
    LoginComponent,
    HomeComponent,
    ObjetosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RoutingModule
  ],
  providers: [
    {provide: XSRFStrategy, useFactory: xsrfFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
