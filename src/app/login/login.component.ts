import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.loginform = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginform.valid) {
      console.log(this.loginform);
      let data = {
        email: this.loginform.value.email,
        password: this.loginform.value.password,
      };
      this.userService.getLogin(data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem("token", res.id);
        this.router.navigate(["dashboard"]);
      });
    }
  }
}
