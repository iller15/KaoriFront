import { Serie } from './serie';
import { Observable } from 'rxjs';

export class Temporada {
    idTemporada: string;
    numTemporada: number;
    fechaInicio: string;
    fechaFinal: string;
    serie: Serie;
    capitulos: Observable<any>;
    
}
