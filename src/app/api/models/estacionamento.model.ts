import { CommonModel } from "./common.model";
import { EnderecoModel } from "./endereco.model";

export class EstacionamentoModel extends CommonModel{
    qtdVagasTotal: number;
    endereco: EnderecoModel
}