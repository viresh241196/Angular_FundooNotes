import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthguardService } from "src/app/services/authguard.service";

@Injectable({
  providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(
    private authguardservice: AuthguardService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (!this.authguardservice.getToken()) {
      this.router.navigateByUrl("/login");
    }
    return this.authguardservice.getToken();
  }
}
