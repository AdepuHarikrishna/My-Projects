import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgrHomeComponent } from './mgr-home.component';

describe('MgrHomeComponent', () => {
  let component: MgrHomeComponent;
  let fixture: ComponentFixture<MgrHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgrHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
