import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, map, take } from "rxjs";
import { Injectable } from "@angular/core";
import { ObterPorCepModel } from "../models/obter-por-cep.model";

@Injectable()
export class EnderecoService {
    
    url = environment["apiUrl"] + "Endereco/"

    constructor(private readonly httpClient: HttpClient) { }

    public Obter(cep: string): Observable<ObterPorCepModel>{
        return this.httpClient.get(`${this.url}obter-por-cep/${cep}`).pipe(take(1), map(x => x["data"]));
    }

}

