import { Component, OnInit } from '@angular/core';
import { KaoriService } from '../kaori.service';
import { Router } from '@angular/router';
import { Snippet } from '../model/snippet';

@Component({
  selector: 'app-registrar-snippet',
  templateUrl: './registrar-snippet.component.html',
  styleUrls: ['./registrar-snippet.component.css']
})
export class RegistrarSnippetComponent implements OnInit {

  snippet : Snippet = new Snippet(); //estos no deben ser privados por algo del form xd

  constructor(private kaoriService: KaoriService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(){
    console.log("/snippet")
    this.kaoriService.regSnippet(this.snippet);
  }

}