import { Component, OnInit } from "@angular/core";
import { HeroService } from "./hero.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
    selector:'hero-list',
    template:`<h1>Hero list works</h1>
            <ul>
            <li [style.backgroundColor]="(selectedId===hero.id)?'yellow':'null'" *ngFor="let hero of hero$" (click)=onSelect(hero)>{{hero.id}} - {{hero.name}}</li>            
            </ul>
    `
})

export class HeroListComponent implements OnInit{
    
    hero$;
    selectedId:number;

    constructor(private heroService:HeroService, private route: ActivatedRoute, private router:Router){}
    
    ngOnInit(){
        this.heroService.getHeroes().subscribe(data => this.hero$=data);
        this.route.paramMap.subscribe((params:ParamMap)=>{
            let id=parseInt(params.get('id'));
            this.selectedId=id;
            //console.log(this.selectedId);
        }); 
    }
    onSelect(hero){
        this.router.navigate([hero.id],{relativeTo:this.route});
    }
}