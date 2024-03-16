import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  goToChildRoute(route :string ){      
    this.router.navigate([route]);
  }

}
