import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shipping } from 'shared/model/shipping.interface';

@Component({
  selector: 'check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss'],
})
export class CheckOutFormComponent {
  @Output('placeOrder') placeOrder = new EventEmitter<Shipping>();

  shippingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shippingForm = fb.group({
      name: [null, [Validators.required]],
      doorNo: [null, [Validators.required]],
      address: [null, [Validators.required]],
      city: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.shippingForm.valid && this.placeOrder.emit(this.shippingForm.value);
  }
}
