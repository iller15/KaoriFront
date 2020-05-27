import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { Serie } from './serie';
import { Capitulo } from './capitulo';

export class AvanceSerie {
    idAvance: number;
    usuario: Usuario;
    serie: Serie;
    capitulo: Capitulo;
}
