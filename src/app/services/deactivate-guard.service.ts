import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CrisisDetailComponent } from "../Crisis/crisis-detail.component";


@Injectable({
    providedIn:'root'
})
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
    canDeactivate(component: CrisisDetailComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('Deactivating...');
        return confirm('Discard changes?');
    }

}