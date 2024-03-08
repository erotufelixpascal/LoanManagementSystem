import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRecordComponent } from './client-record.component';

describe('ClientRecordComponent', () => {
  let component: ClientRecordComponent;
  let fixture: ComponentFixture<ClientRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientRecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
