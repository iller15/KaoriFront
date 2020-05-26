import { Component, OnInit } from '@angular/core';
import { Capitulo } from '../model/capitulo';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-capitulo',
  templateUrl: './registar-capitulo.component.html',
  styleUrls: ['./registar-capitulo.component.css']
})
export class RegistarCapituloComponent implements OnInit {
  capitulo:Capitulo = new Capitulo();

  constructor(private kaoriService:KaoriService, private router:Router) { }

  ngOnInit(): void {
  }
  
  registrar():void{

  }

}
