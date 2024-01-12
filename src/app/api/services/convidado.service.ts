import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, map, take } from "rxjs";
import { ConvidadoModel } from "../models/convidado.model";

@Injectable()
export class ConvidadoService {
    
    url = environment["apiUrl"] + "Convidado/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(cor: ConvidadoModel){
        return this.httpClient.post(this.url, cor).pipe(take(1));
    }

    public Obter(): Observable<ConvidadoModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<ConvidadoModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(cor: ConvidadoModel){
        return this.httpClient.put(this.url, cor).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }


}

