import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoanApplicationComponent } from "./Client/loan-application/loan-application.component";
import { ClientRecordComponent } from "./LoanOfficer/client-record/client-record.component";

@NgModule({
    declarations: [
        LoanApplicationComponent
    ],

    imports : [
        AppRoutingModule,
        LoanApplicationComponent,
        ClientRecordComponent

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


    