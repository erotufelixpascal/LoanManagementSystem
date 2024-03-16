import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoanApplicationComponent } from "./Client/loan-application/loan-application.component";
import { ClientRecordComponent } from "./LoanOfficer/client-record/client-record.component";
import { ClienthomePageComponent } from "./Client/clienthome-page/clienthome-page.component";
import { RegisterLoanComponent } from "./LoanOfficer/register-loan/register-loan.component";
import { ViewLoanComponent } from "./LoanOfficer/view-loan/view-loan.component";
import { HomePageComponent } from "./LoanOfficer/home-page/home-page.component";
@NgModule({
    declarations: [
        LoanApplicationComponent,
        ClientRecordComponent,
        ClienthomePageComponent,
        RegisterLoanComponent,
        ViewLoanComponent,
        HomePageComponent
    ],

    imports : [
        AppRoutingModule
        

    ] ,

providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


    