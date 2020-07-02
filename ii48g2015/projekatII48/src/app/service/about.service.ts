import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AboutService{
    private readonly API_URL = 'http://localhost:8083/about';
    constructor (private httpClient:HttpClient){
    }
}