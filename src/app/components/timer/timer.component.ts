import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  public timeLeft: number;
  private interval: any;

  @Input() setTime: number;
  @Output() timerStopped = new EventEmitter<boolean>();

  public startTimer(): void {
    this.interval = setInterval(() => {
      if (this.setTime > 0) {
        this.setTime--;
      } else {
        clearInterval(this.interval);
        this.timerStopped.emit(true);
      }
    }, 1000);
  }
}
