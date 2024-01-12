import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginModel } from "../models/login.model";
import { Observable, map, take } from "rxjs";
import { CommonModel } from "../models/common.model";

@Injectable()
export class TipoUsuarioService {
    
    url = environment["apiUrl"] + "TipoUsuario/"

    constructor(private readonly httpClient: HttpClient) { }

    public Obter(): Observable<CommonModel[]>{
        return this.httpClient.get(this.url).pipe(take(1), map(x => x["data"]));
    }


}

