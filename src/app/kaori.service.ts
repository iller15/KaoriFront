import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //para llamar rest
import { Snippet } from './model/snippet';
import { Observable } from 'rxjs';
import { Articulo } from './model/articulo';

@Injectable({
  providedIn: 'root'
})
export class KaoriService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //aqui van todas las funciones del rest.

  regSnippet(snippet : Snippet) : Observable<any> {
    console.log(this.urlBase+ "/snippet");
    return this.http.post(this.urlBase + "/snippet", snippet,{headers: this.httpHeaders});
  }

  listSnippet(): Observable<any> {
    return this.http.get(this.urlBase+"listSnippet").pipe( // se supone que se usa para llamar sin usar streams de java
      map(response => response as Snippet[])
    )
  }

  obtenerArticulo(idArticulo): Observable<any>{
    return this.http.get(this.urlBase + "/articulo-" +idArticulo).pipe(
      map(response => response as Articulo)
    )
  }

  mostrarSnippetsFiltrados(idArticulo:String, idCapitulo:String): Observable<any>{
    return this.http.get(this.urlBase + "/articulo-"+idArticulo+"-"+idCapitulo).pipe(
      map(response => response as Snippet[]))
  }

}
