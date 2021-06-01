import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthguardService implements CanActivate {
  canActivate(): boolean {
    return true;
  }
  constructor() {}

  getToken() {
    return !!localStorage.getItem("token");
  }
}
