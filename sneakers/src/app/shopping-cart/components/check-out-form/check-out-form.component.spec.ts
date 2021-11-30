import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutFormComponent } from './check-out-form.component';

describe('CheckOutFormComponent', () => {
  let component: CheckOutFormComponent;
  let fixture: ComponentFixture<CheckOutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
