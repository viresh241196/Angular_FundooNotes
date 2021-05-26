import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpservice: HttpService) {}

  getLogin(data: any) {
    return this.httpservice.Post("/user/login", data);
  }

  createAccount(data: any) {
    return this.httpservice.Post("/user/userSignUp", data);
  }

}
