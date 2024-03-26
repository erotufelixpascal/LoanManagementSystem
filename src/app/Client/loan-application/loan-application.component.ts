import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent implements OnInit{
  LoanGroup: FormGroup;
  email : string="";

  constructor(
    private router: Router,
    private fb: FormBuilder
  ){
    this.LoanGroup = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      loanAmount: [null, [Validators.required]],
      loanPurpose :[null, [Validators.required]]

    })
  }

  ngOnInit(): void {
    
  }
  loanApplication(email : string){
    console.log();
  }

  goToChildRoute(route :string ){      
    this.router.navigate([route]);
  }

}
