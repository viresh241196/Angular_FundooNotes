import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  hide = true;
  signupform: any = FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
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
      let data = {
        firstName: this.signupform.value.firstName,
        lastName: this.signupform.value.lastName,
        email: this.signupform.value.email,
        password: this.signupform.value.password1,
        service: "advance",
      };
      this.userService.createAccount(data).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
