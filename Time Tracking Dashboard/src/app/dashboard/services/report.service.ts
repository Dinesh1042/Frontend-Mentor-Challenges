import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Report } from 'shared/models/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor() {}

  getReports() {
    return of(reports);
  }
}

const reports: Report[] = [
  {
    title: 'Work',
    icon: 'assets/icons/icon-work.svg',
    background: '#ff8c66',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 5,
        previous: 7,
      },
      {
        timeFrame: 'weekly',
        current: 32,
        previous: 36,
      },
      {
        timeFrame: 'monthly',
        current: 103,
        previous: 128,
      },
    ],
  },
  {
    title: 'Play',
    icon: 'assets/icons/icon-play.svg',
    background: '#56c2e6',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 1,
        previous: 2,
      },
      {
        timeFrame: 'weekly',
        current: 10,
        previous: 8,
      },
      {
        timeFrame: 'monthly',
        current: 23,
        previous: 29,
      },
    ],
  },
  {
    title: 'Study',
    icon: 'assets/icons/icon-study.svg',
    background: '#ff5c7c',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 0,
        previous: 1,
      },
      {
        timeFrame: 'weekly',
        current: 4,
        previous: 7,
      },
      {
        timeFrame: 'monthly',
        current: 13,
        previous: 19,
      },
    ],
  },
  {
    title: 'Exercise',
    icon: 'assets/icons/icon-exercise.svg',
    background: '#4acf81',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 1,
        previous: 1,
      },
      {
        timeFrame: 'weekly',
        current: 4,
        previous: 5,
      },
      {
        timeFrame: 'monthly',
        current: 11,
        previous: 18,
      },
    ],
  },
  {
    title: 'Social',
    icon: 'assets/icons/icon-social.svg',
    background: '#7536d3',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 1,
        previous: 3,
      },
      {
        timeFrame: 'weekly',
        current: 5,
        previous: 10,
      },
      {
        timeFrame: 'monthly',
        current: 21,
        previous: 23,
      },
    ],
  },
  {
    title: 'Self Care',
    icon: 'assets/icons/icon-self-care.svg',
    background: '#f1c65b',
    timeFrames: [
      {
        timeFrame: 'daily',
        current: 0,
        previous: 1,
      },
      {
        timeFrame: 'weekly',
        current: 2,
        previous: 2,
      },
      {
        timeFrame: 'monthly',
        current: 7,
        previous: 11,
      },
    ],
  },
];
