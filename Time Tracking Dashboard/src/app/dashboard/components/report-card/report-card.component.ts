import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Report, TimeFrame } from 'shared/models/report.model';

@Component({
  selector: 'report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
  animations: [
    trigger('pulse', [
      transition(':enter', [
        animate(
          '500ms ease-in-out',
          keyframes([
            style({ offset: 0.2, transform: 'scale(1) ' }),
            style({ offset: 0.6, transform: 'scale(1.1)' }),
            style({ offset: 1, transform: 'scale(1)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ReportCardComponent {
  @Input('report') report!: Report;

  timeFrame?: TimeFrame;
  private currentTimeFrameValue = 'daily';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(this.updateTimeFrame.bind(this));
  }

  updateTimeFrame(obs: ParamMap) {
    this.currentTimeFrameValue = obs.get('timeFrame') || 'daily';

    this.timeFrame = this.report.timeFrames.find(
      ({ timeFrame }) => timeFrame === this.currentTimeFrameValue
    );
    if (!this.timeFrame) this.router.navigate(['/']);
  }

  modifyTimeFrame(timeFrame: string) {
    const timeFrameData: any = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month',
    };
    return timeFrameData[timeFrame];
  }
}
