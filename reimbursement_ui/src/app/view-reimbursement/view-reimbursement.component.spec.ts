import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReimbursementComponent } from './view-reimbursement.component';

describe('ViewReimbursementComponent', () => {
  let component: ViewReimbursementComponent;
  let fixture: ComponentFixture<ViewReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
