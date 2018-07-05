import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroListComponent } from "./hero-list.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroOverview } from "./hero-overview.component";
import { HeroContact } from "./hero-contact.component";

const heroRoutes: Routes=[
    {path:'heroes', component:HeroListComponent},
    {
        path:'heroes/:id', component:HeroDetailComponent,
        children:[
            {path:'overview', component:HeroOverview},
            {path:'contact', component:HeroContact}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(heroRoutes)],
    exports:[RouterModule]
})

export class HeroRoutingModule{}