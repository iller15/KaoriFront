import { Component, OnInit } from '@angular/core';
import { Serie } from '../model/serie';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-serie',
  templateUrl: './registar-serie.component.html',
  styleUrls: ['./registar-serie.component.css']
})
export class RegistarSerieComponent implements OnInit {

  serie:Serie = new Serie();

  constructor(private kaoriService:KaoriService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar():void{

  }

}
