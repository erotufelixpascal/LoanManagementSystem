import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./LoanOfficer/home-page/home-page.component";


const routes: Routes = [

    { path:"Loan-Officer/home-page" , component:HomePageComponent  }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}