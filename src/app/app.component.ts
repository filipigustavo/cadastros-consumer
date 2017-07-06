import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro consumer';

  constructor(private router:Router){}

  logout():void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit():void{}
}
