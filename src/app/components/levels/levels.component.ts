import { Component, Input, Output, EventEmitter } from '@angular/core';

interface ILevel {
  value:number;
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent {
  public timeValue: number;

  @Input() levels: Array<object>;
  @Input() isTimerCounting: boolean;
  @Output() newTime = new EventEmitter<ILevel>();

  constructor() {}

  public changeTimeValue(level: ILevel): void {
    this.timeValue = level.value;
    this.newTime.emit(level);
  }
}