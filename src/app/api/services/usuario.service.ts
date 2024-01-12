import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable, map, take } from "rxjs";
import { UsuarioModel } from "../models/usuario.model";

@Injectable()
export class UsuarioService {
    
    url = environment["apiUrl"] + "Usuario/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(cor: UsuarioModel){
        return this.httpClient.post(this.url, cor).pipe(take(1));
    }

    public Obter(): Observable<UsuarioModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<UsuarioModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(cor: UsuarioModel){
        return this.httpClient.put(this.url, cor).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }


}

