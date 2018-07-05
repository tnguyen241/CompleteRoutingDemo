import { Component, OnInit, HostBinding } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { HeroService } from "./hero.service";
import { slideInDownAnimation } from '../animations';

@Component({
    template:`<h1>Hero Detail works</h1>
                <p>{{hero$?.id}}</p>
                <p>{{hero$?.name}}</p>
                <button (click)="goToHeroesList()">Go to Hero List</button>
                <p><button (click)="goToOverview()">Overvew</button><button (click)="goToContact()">Contact</button></p>
                <router-outlet>
    `,
    animations: [ slideInDownAnimation ]
})

export class HeroDetailComponent implements OnInit{
    
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
    
    hero$;

    constructor(private router:Router, private route:ActivatedRoute, private heroService:HeroService){}

    ngOnInit(){        
        //this.activatedRoute.paramMap.pipe(switchMap((params:ParamMap)=> this.heroService.getHero(params.get('id')))).subscribe(data => this.hero$=data);
        this.route.paramMap.subscribe((params:ParamMap)=>
        {
            let id=params.get('id');
            this.heroService.getHero(id).subscribe(data => this.hero$=data);
        });
    }
    goToHeroesList(){
        let heroId=this.hero$?this.hero$.id:null;
        //this.router.navigate(['/heroes'],{queryParams:{id: heroId}});
        this.router.navigate(['../',{id:heroId}], {relativeTo:this.route});
    }
    goToOverview(){
        this.router.navigate(['overview'],{relativeTo:this.route});
    }
    goToContact(){
        let heroId=this.hero$?this.hero$.id:null;
        this.router.navigate(['contact', {id:heroId}],{relativeTo:this.route});
    }

}