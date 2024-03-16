import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clienthome-page',
  templateUrl: './clienthome-page.component.html',
  styleUrl: './clienthome-page.component.scss'
})
export class ClienthomePageComponent implements OnInit{
  constructor(
    private router: Router
  ){}
  ngOnInit(): void { }

  goToChildRoute(route :string ){      
    this.router.navigate([route]);
  }

}
