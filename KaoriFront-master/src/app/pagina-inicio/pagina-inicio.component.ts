import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent implements OnInit {

  algo : number = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
