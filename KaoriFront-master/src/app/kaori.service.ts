import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; //para llamar rest
import { Snippet } from './model/snippet';
import { Observable } from 'rxjs';

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
    console.log(this.urlBase + "/listSnippet");
    return this.http.get(this.urlBase + "/listSnippet").pipe( // se supone que se usa para llamar sin usar streams de java
      map(response => response as Snippet[])
    )
  }

}
