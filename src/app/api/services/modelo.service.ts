import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ModeloModel } from "../models/modelo.model";
import { Observable, map, take } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ModeloService {
    
    url = environment["apiUrl"] + "Modelo/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(model: ModeloModel){
        return this.httpClient.post(this.url, model).pipe(take(1));
    }

    public Obter(): Observable<ModeloModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<ModeloModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(model: ModeloModel){
        return this.httpClient.put(this.url, model).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }

}