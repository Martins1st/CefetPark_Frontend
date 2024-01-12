import { CommonModel } from "./common.model";

export class EnderecoModel extends CommonModel {
    numero: string;
    complemento?: string;
    bairro: string;
    cep: string;
    longitude: string;
    latitude: string;
    tipoLogradouro: string;
    rua: string;
}