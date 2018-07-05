import { NgModule } from "@angular/core";
import { CrisisCenterComponent } from "./crisis-center.component";
import { ManageCrisisComponent } from "./manage-crisis.component";
import { CrisisDetailComponent } from "./crisis-detail.component";
import { CrisisCenterHomeComponent } from "./crisis-center-home.component";
import { CrisisRoutingModule } from "./crisis-routing.module";

@NgModule({
    declarations:[CrisisCenterComponent, ManageCrisisComponent, CrisisDetailComponent, CrisisCenterHomeComponent],
    imports: [CrisisRoutingModule]
})

export class CrisisModule{}