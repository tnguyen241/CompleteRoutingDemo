import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HeroListComponent } from "./hero-list.component";
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";
import { HeroRoutingModule } from "./hero-routing.module";
import { HeroOverview } from "./hero-overview.component";
import { HeroContact } from "./hero-contact.component";


@NgModule({
    declarations:[HeroListComponent, HeroDetailComponent, HeroOverview, HeroContact],
    imports:[CommonModule, FormsModule, HttpClientModule, HeroRoutingModule, ReactiveFormsModule],
    providers:[HeroService]
})

export class HeroesModule{}