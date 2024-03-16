import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./LoanOfficer/home-page/home-page.component";
import { RegisterLoanComponent } from "./LoanOfficer/register-loan/register-loan.component";
import { ViewLoanComponent } from "./LoanOfficer/view-loan/view-loan.component";
import { ClientRecordComponent } from "./LoanOfficer/client-record/client-record.component";
import { ClienthomePageComponent } from "./Client/clienthome-page/clienthome-page.component";
import { LoanApplicationComponent } from "./Client/loan-application/loan-application.component";


export const routes: Routes = [ 
    { path:"" , component: HomePageComponent},
    { path:"loan-officer/home-page" , component: HomePageComponent},
    { path:"loan-officer/register-loan" , component: RegisterLoanComponent},
    { path:"loan-officer/view-loan" , component: ViewLoanComponent},
    { path:"loan-officer/client-record" , component: ClientRecordComponent},
    { path:"client/home-page" , component: ClienthomePageComponent},
    { path:"client/loan-application" , component: LoanApplicationComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}

