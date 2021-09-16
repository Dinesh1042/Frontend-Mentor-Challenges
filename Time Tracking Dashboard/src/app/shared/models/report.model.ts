export interface Report {
  title: string;
  icon: string;
  background: string;
  timeFrames: TimeFrame[];
}

export interface TimeFrame {
  timeFrame: string;
  current: number;
  previous: number;
}
