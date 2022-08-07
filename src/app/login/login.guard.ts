import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private accountServicce: AccountService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged=this.accountServicce.isLoggedIn();
        if (logged) {
            return true;
            
        }
        this.router.navigate(["login"]);
        return false;



    }




}