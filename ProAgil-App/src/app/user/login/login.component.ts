import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  titulo = 'titulo';
  model: any = {};

  constructor(public router:Route) { }

  ngOnInit() {
  }

  login(){

  }
}
