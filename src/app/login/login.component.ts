import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginform: any = FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginform = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.loginform.valid){
    console.log(this.loginform);
    }
  }
}