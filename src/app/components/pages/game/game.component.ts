import { TimerComponent } from '../../timer/timer.component';
import levels from '../../../constants/levels';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ILevel } from 'src/app/models/ILevel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public username = '';
  public clickCount = 0;
  public showGif = false;
  public isTimerCounting = false;
  public showResults = false;
  public newTime = 59;
  public levels = levels;

  @ViewChild('timer') timerRef: TimerComponent;

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
  }

  public incrementCount(): void {
    this.clickCount++;
    if (this.clickCount === 1) {
      this.showGif = true;
      this.isTimerCounting = true;
      this.timerRef.startTimer();
    }
  }

  public onTimerStopped(isTimerStopped: boolean): void {
    if (isTimerStopped) {
      this.showGif = false;
      this.showResults = true;
    }
  }

  public setNewTime(level: ILevel): void {
    this.newTime = level.value;
  }
}
