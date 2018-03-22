import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";

import { AuthService } from "./auth.service";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService
      .isAuthenticated().then(
          (authenticated: boolean) => {
            if(authenticated) {
                return true;
            }
            else {
                this._router.navigate(["/login"]);
            }              
          }
      );
  }
}
  