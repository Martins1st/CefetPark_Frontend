import { CommonModel } from "./common.model"

export class ConvidadoModel extends CommonModel {
    cpf: string;
    carros: ConvidadoCarroModel[];
    sicap: string;
}

class ConvidadoCarroModel {
    id: string;
    placa: string;
    cor: string;
    modelo: string;
}