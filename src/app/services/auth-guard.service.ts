import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./authentication.service";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('Parent route authenticated');
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Child route authenticated');    
    return this.canActivate(route,state);
}

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { 
        console.log('isLoggedIn');
        return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}