import { Observable } from 'rxjs';
import { Serie } from './serie';

export class Articulo {
    idArticulo: number;
    tituloArticulo: string;
    fechaPublicacion: string;
    snippets: Observable<any>;
    serie: Serie;
}
