import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginModel } from "../models/login.model";
import { map, take } from "rxjs";

@Injectable()
export class AuthService {
    
    url = environment["apiUrl"] + "Auth/"

    constructor(private readonly httpClient: HttpClient) { }



    public Login(login: LoginModel){
        return this.httpClient.post(this.url + "Login", login ).pipe(take(1));
    }

}

