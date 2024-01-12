import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, map, take } from "rxjs";
import { CommonModel } from "../models/common.model";
import { Injectable } from "@angular/core";

@Injectable()
export class DepartamentoService {
    
    url = environment["apiUrl"] + "Departamento/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(model: CommonModel){
        return this.httpClient.post(this.url, model).pipe(take(1));
    }

    public Obter(): Observable<CommonModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<CommonModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(model: CommonModel){
        return this.httpClient.put(this.url, model).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }

}

