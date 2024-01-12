import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({providedIn:"root"})

export class MomentService{
    constructor(){
        moment.locale("pt-br");
    }

    obterDiferencaEntreDatasEmMilisegundos(dataFinal, dataInicial){
        let result = moment(dataFinal).diff(dataInicial, "milliseconds");
        return result;
    }

    obterDataHoraAtual(){
        return moment();
    }



}