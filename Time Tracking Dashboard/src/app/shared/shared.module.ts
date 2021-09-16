import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberCountAnimation } from './directive/number-animation.directive';

@NgModule({
  declarations: [NumberCountAnimation],
  imports: [CommonModule],
  exports: [NumberCountAnimation],
})
export class SharedModule {}
