import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import jwtDecode from "jwt-decode";
import { MomentService } from "./moment.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { take } from "rxjs";
import { MessageService } from "primeng/api";


@Injectable()
export class GeoService {

    url = "https://maps.googleapis.com/maps/api/geocode/json?"

    constructor(private readonly httpClient: HttpClient, private readonly messageService: MessageService) { }


    public ObterEndereco(cep: string){
        return this.httpClient.get(this.url + `components=postal_code:${cep}&key=${environment.chaveGoogle}`).pipe(take(1));
    }
}
