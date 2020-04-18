import levels from '../../constants/levels';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  public username = '';
  public clickCount = 0;
  public showGif = false;
  public isTimerCounting = false;
  public newTime = 59;
  public levels = levels;

  constructor() {
    this.username = localStorage.getItem('user');
  }

  public incrementCount(): void {
    this.clickCount++;
    if (this.clickCount === 1) {
      this.showGif = true;
      this.isTimerCounting = true;
    }
  }

  public setGifStyle(): object {
    return { visibility: this.showGif ? 'visible' : 'hidden' };
  }

  public onTimerStopped(isTimerStopped: boolean): void {
    if (isTimerStopped) {
      this.isTimerCounting = false;
      this.showGif = false;
    }
  }

  public setNewTime(seconds: number): void {
    this.newTime = seconds;
  }
}
