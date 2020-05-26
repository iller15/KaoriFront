import { Observable } from 'rxjs';

export class Serie {
    idSerie: string;
    nombre: string;
    personajes: Observable<any>;
    temporadas: Observable<any>;
    articulos: Observable<any>;
    usuarios: Observable<any>;

}
