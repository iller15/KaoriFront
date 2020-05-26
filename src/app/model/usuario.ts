import { Observable } from 'rxjs';

export class Usuario {
    idUsuario: number;
    nombreUsuario: string;
    nivelUsuario: number;
    contraseña: string;
    series: Observable<any> //avanceSerie
    correo: string;
    banned: boolean;
}
