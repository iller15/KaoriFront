import { Serie } from './serie';
import { Observable } from 'rxjs';

export class Personaje {
    idPersonaje: string;
    nombre: string;
    serie: Serie
    snippets: Observable<any>;
    
}
