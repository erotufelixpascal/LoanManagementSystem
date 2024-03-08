import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./LoanOfficer/home-page/home-page.component";
import { RegisterLoanComponent } from "./LoanOfficer/register-loan/register-loan.component";
import { ViewLoanComponent } from "./LoanOfficer/view-loan/view-loan.component";
import { ClientRecordComponent } from "./LoanOfficer/client-record/client-record.component";


export const routes: Routes = [ 
    { path:"loan-officer/home-page" , component: HomePageComponent},
    { path:"loan-officer/register-loan" , component: RegisterLoanComponent},
    { path:"loan-officer/view-loan" , component: ViewLoanComponent},
    { path:"loan-officer/client-record" , component: ClientRecordComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}

