import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienthomePageComponent } from './clienthome-page.component';

describe('ClienthomePageComponent', () => {
  let component: ClienthomePageComponent;
  let fixture: ComponentFixture<ClienthomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienthomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienthomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
