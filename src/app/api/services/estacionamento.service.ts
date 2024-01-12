import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, map, take } from "rxjs";
import { CommonModel } from "../models/common.model";
import { Injectable } from "@angular/core";
import { EstacionamentoModel } from "../models/estacionamento.model";

@Injectable()
export class EstacionamentoService {
    
    url = environment["apiUrl"] + "Estacionamento/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(model: EstacionamentoModel){
        return this.httpClient.post(this.url, model).pipe(take(1));
    }

    public Obter(): Observable<EstacionamentoModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<EstacionamentoModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(model: EstacionamentoModel){
        return this.httpClient.put(this.url, model).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }

}

