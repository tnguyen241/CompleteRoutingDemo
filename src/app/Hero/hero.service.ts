import { Injectable } from "@angular/core";
 import { HttpClient } from '@angular/common/http';


@Injectable()

export class HeroService{
    
    constructor(private http: HttpClient){}

    getHero(id){
        return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
    }
    getHeroes(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}