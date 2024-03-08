import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    declarations: [],

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


    