import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutCardComponent } from './check-out-card.component';

describe('CheckOutCardComponent', () => {
  let component: CheckOutCardComponent;
  let fixture: ComponentFixture<CheckOutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
