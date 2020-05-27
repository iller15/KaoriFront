import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //para llamar rest
import { Snippet } from './model/snippet';
import { Observable, observable } from 'rxjs';
import { Articulo } from './model/articulo';
import { Temporada } from './model/temporada';
import { Serie } from './model/serie';

@Injectable({
  providedIn: 'root'
})
export class KaoriService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //aqui van todas las funciones del rest.

//SNIPPET

  regSnippet(snippet : Snippet) : Observable<any> {
    console.log(this.urlBase+ "/snippet");
    return this.http.post(this.urlBase + "/snippet", snippet,{headers: this.httpHeaders});
  }

  listSnippet(): Observable<any> {
    return this.http.get(this.urlBase+"/listSnippet").pipe( // se supone que se usa para llamar sin usar streams de java
      map(response => response as Snippet[])
    )
  }

//SERIES

  regSerie(serie : Serie) : Observable<any>{
    console.log(this.urlBase+"/regSerie");
    return this.http.post(this.urlBase+ "/regSerie",serie, {headers:this.httpHeaders});
  }
  listSerie(): Observable<any>{
    console.log(this.urlBase+"/listSeries");
    return this.http.get(this.urlBase + "/listSeries").pipe(map(response => response as Serie[]))
  }

//TEMPORADAS

  regTemporada(temporada : Temporada, idSerie: string): Observable<any>{
    console.log(this.urlBase+"/regTemporada");
    return this.http.post(this.urlBase + "/regTemporada-" + idSerie, temporada, {headers: this.httpHeaders});
  }

//CAPITULOS
  regCapitulo(){
    
  }
  listCapitulo(){

  }

//ARTICULO

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
