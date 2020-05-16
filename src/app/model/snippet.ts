import { Observable } from 'rxjs'

export class Snippet {
idSnippet:string;
description: string;
texto:string;
idCapitulo: string;
personajes: Observable<any>;
articulos:Observable<any>;
}
