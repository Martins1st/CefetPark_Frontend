import { CarroModel } from "./carro.model";
import { CommonModel } from "./common.model";

export class UsuarioModel {
    id: number;
    cpf: string;
    matricula: string;
    nome: string;
    telefonePrincipal: string;
    telefoneSecundario: string;
    emailPrincipal: string;
    emailSecundario: string;
    departamento: CommonModel;
    tipoUsuario: CommonModel;
    carros: CarroModel[];
  }