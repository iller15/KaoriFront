import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Temporada } from '../model/temporada';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-temporada',
  templateUrl: './registar-temporada.component.html',
  styleUrls: ['./registar-temporada.component.css']
})
export class RegistarTemporadaComponent implements OnInit {
  //las variables de la clase se actualizan segun las escribes en el las casillas

  temporada : Temporada = new Temporada();
  idSerie: string;

  constructor(private kaoriService: KaoriService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar():void{
    this.kaoriService.regTemporada(this.temporada,this.idSerie);
  }

}
