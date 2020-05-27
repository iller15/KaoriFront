import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snippet } from '../model/snippet';
import { KaoriService } from '../kaori.service';

@Component({
  selector: 'app-listar-snippets',
  templateUrl: './listar-snippets.component.html',
  styleUrls: ['./listar-snippets.component.css']
})
export class ListarSnippetsComponent implements OnInit {

  snippets: Observable<Snippet[]>

  constructor(private kaoriService: KaoriService ) {   }

  ngOnInit(): void {
    this.cargarData();
  }
  cargarData(){
    console.log("Llamando al Servicio");
    this.kaoriService.listSnippet().subscribe(
      snippets => this.snippets = snippets
    )
  }
}
