import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from "./Hero/hero-list.component";
import { ManageCrisisComponent } from "./Crisis/manage-crisis.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { ComposeMessageComponent } from "./compost-message.component";
import { LoginComponent } from "./login.component";

const routes: Routes=[        
    {path:'compose',component: ComposeMessageComponent, outlet: 'popup'},
    {path:'login', component: LoginComponent},
    {path:'', redirectTo:'/heroes', pathMatch:'full'},
    {path:'**', component:PageNotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule{}