import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, GridSizeChangedEvent, createGrid } from "ag-grid-community";


interface IRow {
  participant_PID: string;
  ParticipantFirstName: string;
  ParticipantLastName: string;
  ParticipantNamesLike: string;
  course_partner_PID: string;
  CoursePartnerFirstName: string;
  CoursePartnerLastName: string;
  CoursePartnerNamesLike: string;
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

  onGridSizeChange(params: GridSizeChangedEvent) {
    const gridApi = params.api;
    gridApi.sizeColumnsToFit();
  }

}
