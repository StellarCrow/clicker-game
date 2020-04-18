import { Component, Input, OnChanges, SimpleChange, Output, EventEmitter, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnChanges {
  public timeLeft: number;

  @Input() timerStarted: boolean;
  @Input() changeTime: number;
  @Output() timerStopped = new EventEmitter<boolean>();

  constructor() {}

  ngOnChanges(changes: any): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'timerStarted': {
            if (this.timerStarted) {
              this.startTimer();
            }
            break;
          }
          case 'changeTime': {
            this.timeLeft = this.changeTime;
          }
        }
      }
    }
  }

  private startTimer() {
    setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timerStopped.emit(true);
      }
    }, 1000);
  }
}

@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
  transform(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
  }
}
