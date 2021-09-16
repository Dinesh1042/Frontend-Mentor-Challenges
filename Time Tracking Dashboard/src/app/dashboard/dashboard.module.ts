import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [ProfileCardComponent, ReportCardComponent, ReportComponent],
  imports: [CommonModule, SharedModule, RouterModule.forRoot([])],
})
export class DashboardModule {}
