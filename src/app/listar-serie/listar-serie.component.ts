import { Component, OnInit } from '@angular/core';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Serie } from '../model/serie';

@Component({
  selector: 'app-listar-serie',
  templateUrl: './listar-serie.component.html',
  styleUrls: ['./listar-serie.component.css']
})
export class ListarSerieComponent implements OnInit {

  series: Observable<Serie>;

  constructor(private kaoriService : KaoriService,private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.kaoriService.listSerie().subscribe(series => this.series = series);
  }

}
