import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginModel } from "../models/login.model";
import { Observable, map, take } from "rxjs";
import { CommonModel } from "../models/common.model";

@Injectable()
export class CorService {
    
    url = environment["apiUrl"] + "Cor/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(cor: CommonModel){
        return this.httpClient.post(this.url, cor).pipe(take(1));
    }

    public Obter(): Observable<CommonModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<CommonModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(cor: CommonModel){
        return this.httpClient.put(this.url, cor).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }

}

