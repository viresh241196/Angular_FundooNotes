import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Component/login/login.component";
import { SignupComponent } from "./Component/signup/signup.component";
import { DashboardComponent } from "./Component/dashboard/dashboard.component";
import { GetallnoteComponent } from "./Component/getallnote/getallnote.component";
import { GetallarchieveComponent } from "./Component/getallarchieve/getallarchieve.component";
import { GetalltrashComponent } from "./Component/getalltrash/getalltrash.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "note", pathMatch: "full" },
    { path: "note", component: GetallnoteComponent },
    { path: "archieveNote", component: GetallarchieveComponent },
    { path: "trash", component: GetalltrashComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
