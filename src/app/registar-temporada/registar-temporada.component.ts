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

  temporada : Temporada = new Temporada();

  constructor(private kaoriService: KaoriService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar():void{
    
  }

}
