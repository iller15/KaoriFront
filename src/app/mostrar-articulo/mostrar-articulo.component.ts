import { Component, OnInit } from '@angular/core';
import { Articulo } from '../model/articulo';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { analyzeNgModules } from '@angular/compiler';

@Component({
  selector: 'app-mostrar-articulo',
  templateUrl: './mostrar-articulo.component.html',
  styleUrls: ['./mostrar-articulo.component.css']
})
export class MostrarArticuloComponent implements OnInit {
  
  articulo :Observable<Articulo>;
  snippets: Observable<any>;
  algo: Articulo;

  constructor(private kaoriService:KaoriService, router:Router) { }

  ngOnInit(): void {
    //AQUI DEBERIA IR IMPIRMIR ARTICULO
  }
  
  mostrar(idArticulo:string){
     this.kaoriService.obtenerArticulo(idArticulo).subscribe( articulo => this.articulo = articulo);
     this.articulo

     this.algo.serie.idSerie
     
  }

}
