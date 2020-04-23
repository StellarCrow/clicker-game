import { IUser } from 'src/app/models/IUser';
import { TimerComponent } from '../../timer/timer.component';
import levels from '../../../constants/levels';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ILevel } from 'src/app/models/ILevel';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public username = '';
  public score = 0;
  public isTimerCounting = false;
  public showResults = false;
  public newTime = 59;
  public levels = levels;
  public isNewHighscore: boolean;

  @ViewChild('timer') timerRef: TimerComponent;

  constructor(private userService: UserService, private statisticsService: StatisticsService, private router: Router) {}

  ngOnInit(): void {
    const username = this.userService.getUser();
    if (username) {
      this.username = username;
    } else {
      this.router.navigate(['/']);
    }
  }

  get user(): IUser {
    return { name: this.username, score: this.score };
  }

  public incrementCount(): void {
    this.score++;
    if (this.score === 1) {
      this.isTimerCounting = true;
      this.timerRef.startTimer();
    }
  }

  public onTimerStopped(isTimerStopped: boolean): void {
    if (isTimerStopped) {
      this.isTimerCounting = false;
      this.showResults = true;
      this.isNewHighscore = this.statisticsService.isWinner(this.user);
      this.statisticsService.addUserToStatistics(this.user);
    }
  }

  public setNewTime(level: ILevel): void {
    this.newTime = level.value;
  }
}
