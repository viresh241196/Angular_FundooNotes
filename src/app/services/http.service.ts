import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  starturl = environment.BaseUrl;
  constructor(private httpclient: HttpClient) {}
  token: any;

  Post(link: string, data: any) {
     this.token = localStorage.getItem("token");
    console.log(this.token);
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        "Content-Type": "application/json",
      }),
    };
    return this.httpclient.post(this.starturl + link, data, options);
  }
  Get(link: string) {
     this.token = localStorage.getItem("token");
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        "Content-Type": "application/json",
      }),
    };
    return this.httpclient.get(this.starturl + link, options);
  }
}
