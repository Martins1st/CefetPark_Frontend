import { ConvidadoModel } from "./convidado.model";
import { UsuarioModel } from "./usuario.model";

export class CarroModel {
    id: number;
    placa: string;
    cor: string;
    modelo: string;
    usuarios: UsuarioModel[];
    convidados: ConvidadoModel[];
    cor_Id: number;
    modelo_Id: number;

  }