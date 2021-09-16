import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { listStagger } from 'shared/animations/list-stagger.animation';
import { Report } from 'shared/models/report.model';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [listStagger()],
})
export class ReportComponent {
  reports$: Observable<Report[]>;

  constructor(reportService: ReportService) {
    this.reports$ = reportService.getReports();
  }
}
