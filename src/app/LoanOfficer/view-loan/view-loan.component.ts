import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, GridSizeChangedEvent, createGrid } from "ag-grid-community";


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

  themeClass = "ag-theme-quartz";
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  GetLoanList: IRow[] = [];
  public rowSelection: "single" | "multiple" = "multiple"

  colDefs: ColDef[] = [
    { field: "FirstName", headerName: "First Name" },
    { field: "LastName", headerName: "Last Name" },
    { field: "NamesLike", headerName: "Names Like" },
    { field: "loanId", headerName: "Loan ID" },
    { field: "loanAmount", headerName: "Loan Amount" },
    { field: "loanStatus",  headerName: "Loan Status",
      // cellRenderer: AssignComponent,
      // cellRenderer: BtnCellRenderer,
      // cellRendererParams: {
      //   clicked: (field: any) => {
      //     this.showModal(field);
      //   },
      // },
    },
  ];
  gridApi: any;

  ngOnInit(): void { }

  onGridSizeChange(event: GridSizeChangedEvent) {
    const gridApi = event.api;
    gridApi.sizeColumnsToFit();
   
  }

}
