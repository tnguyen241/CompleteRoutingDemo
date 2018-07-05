import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    template:`<h1>Crisis Detail</h1>`
})

export class CrisisDetailComponent{

    constructor(
        private route: ActivatedRoute,
        private router: Router,        
      ) {}
      
    // canDeactivate() {      
    //     return confirm('Discard changes?');
    //   }
}