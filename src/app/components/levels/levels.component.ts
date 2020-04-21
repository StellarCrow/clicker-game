import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ILevel } from 'src/app/models/ILevel';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent implements OnInit {
  public timeValue: number;

  @Input() levels: ILevel[];
  @Input() isTimerCounting: boolean;
  @Output() newTime = new EventEmitter<ILevel>();

  ngOnInit(): void {
    const levelChecked = this.levels.find((level) => level.checked);
    if (levelChecked) {
      this.newTime.emit(levelChecked);
    }
  }

  public changeTimeValue(level: ILevel): void {
    this.timeValue = level.value;
    this.newTime.emit(level);
  }
}
