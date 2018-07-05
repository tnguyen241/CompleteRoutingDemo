import { Routes, RouterModule } from "@angular/router";
import { CrisisCenterComponent } from "./crisis-center.component";
import { ManageCrisisComponent } from "./manage-crisis.component";
import { CrisisDetailComponent } from "./crisis-detail.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../services/auth-guard.service";
import { CanDeactivateGuard } from "../services/deactivate-guard.service";

const crisisRoutes:Routes=[
    {path:'crisis-center', component:CrisisCenterComponent, canActivate:[AuthGuard], children:[
        {path:'',canActivateChild:[AuthGuard], children:[
            {path:'detail', component:CrisisDetailComponent, canDeactivate:[CanDeactivateGuard]},
            {path:'manage-crisis', component:ManageCrisisComponent},
            {path:'', component:CrisisCenterHomeComponent}
        ]}
    ]}    
];

@NgModule({
    imports:[RouterModule.forChild(crisisRoutes)],
    exports:[RouterModule]
})

export class CrisisRoutingModule{}