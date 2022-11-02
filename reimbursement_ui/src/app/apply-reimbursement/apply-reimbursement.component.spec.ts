import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyReimbursementComponent } from './apply-reimbursement.component';

describe('ApplyReimbursementComponent', () => {
  let component: ApplyReimbursementComponent;
  let fixture: ComponentFixture<ApplyReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyReimbursementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
