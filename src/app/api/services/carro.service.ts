import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginModel } from "../models/login.model";
import { Observable, map, take } from "rxjs";
import { CommonModel } from "../models/common.model";
import { CarroModel } from "../models/carro.model";

@Injectable()
export class CarroService {
    
    url = environment["apiUrl"] + "Carro/"

    constructor(private readonly httpClient: HttpClient) { }

    public Cadastrar(carro: CarroModel){
        return this.httpClient.post(this.url, carro).pipe(take(1));
    }

    public Obter(): Observable<CarroModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }

    public ObterPorId(id: number): Observable<CarroModel>{
        return this.httpClient.get(this.url + id).pipe(take(1), map(x => x["data"]));
    }

    public Atualizar(cor: CarroModel){
        return this.httpClient.put(this.url, cor).pipe(take(1));
    }

    public Deletar(id: number){
        return this.httpClient.delete(this.url + id).pipe(take(1));
    }


}

