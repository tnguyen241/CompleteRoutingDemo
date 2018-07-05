import { Component } from "@angular/core";

@Component({
    template:`<h1>Crisis Center</h1>
    

  <ul class="nav">
  <li class="nav-item">
  <a routerLink="./" routerLinkActive="active"
  [routerLinkActiveOptions]="{ exact: true }">Crisis Center</a>
  </li>
  <li class="nav-item">
  <a routerLink="./detail" routerLinkActive="active">Crisis Detail</a>
  </li>
  <li class="nav-item">
  <a routerLink="./manage-crisis" routerLinkActive="active">Manage Crisis</a>
  </li>  
</ul>
    <router-outlet></router-outlet>
    `
})

export class CrisisCenterComponent{}