import { Observable } from 'rxjs';
import { Temporada } from './temporada';

export class Capitulo {
    idCapitulo: string;
    numCaptitulo:number;
    tituloCapitulo: string;
    temporada: Temporada;
    snippets: Observable<any>;
    avances: Observable<any>; //any = avanceSeries
    

}
