import { Component, OnInit } from '@angular/core';
//import { ColDef, GridReadyEvent, GridSizeChangedEvent, createGrid } from "ag-grid-community";


interface IRow {
  FirstName: string;
  LastName: string;
  NamesLike: string;
  loanId: string;
  loanAmount: string;
  loanStatus: string;

}
@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrl: './view-loan.component.scss'
})
export class ViewLoanComponent implements OnInit {


  GetLoanList: IRow[] = [];
  public rowSelection: "single" | "multiple" = "multiple"

 

  ngOnInit(): void { }


}
