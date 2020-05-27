import { Component, OnInit } from '@angular/core';
import { Articulo } from '../model/articulo';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {
  
  articulo :Articulo;

  constructor() { }

  ngOnInit(): void {
    //AQUI DEBERIA IR IMPIRMIR ARTICULO
  }

}
