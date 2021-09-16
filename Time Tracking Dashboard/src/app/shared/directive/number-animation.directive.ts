import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Directive({ selector: '[numberCountAnimation]' })
export class NumberCountAnimation implements OnInit, OnChanges, OnDestroy {
  @Input('numberCountAnimation') get value() {
    return this._value;
  }
  set value(val: number) {
    this._value = val;
  }

  @Input('delay') delay = 400;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  private _value = 0;
  private startingValue = 0;
  private speed = 20;
  private subscription?: Subscription;
  private isFirstChangesDone = false;

  ngOnInit() {
    this.subscription = timer(this.delay).subscribe({
      complete: this.animate.bind(this),
    });
    this.render();
  }

  ngOnChanges() {
    if (this.isFirstChangesDone) this.animate();
  }

  private animate() {
    const interval$ = interval(this.speed);

    const intervalSub = interval$.subscribe(() => {
      if (this.safeValidate(this._value))
        if (this.startingValue < this._value) this.startingValue++;
        else if (this.startingValue > this.value) this.startingValue--;
        else intervalSub.unsubscribe();

      this.render();
    });
    this.isFirstChangesDone = true;
  }

  private render() {
    this.renderer.setProperty(
      this.elRef.nativeElement,
      'textContent',
      this.startingValue
    );
  }

  private safeValidate(number: number) {
    return (number || number === 0) && typeof number === 'number';
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
