import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  hide = true;
  signupform: any = FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.signupform = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password1: ["", Validators.required],
      password2: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupform.valid) {
      console.log(this.signupform);
    }
  }
}
