import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss'],
})
export class LevelsComponent {
  public timeValue: number;

  @Input() levels: Array<object>;
  @Output() newTime = new EventEmitter<number>();

  constructor() {}

  // ngOnChanges(changes: any): void {
  //   for (const propName in changes) {
  //     if (changes.hasOwnProperty(propName)) {
  //       switch (propName) {
  //         case 'levels': {
  //           if (this.timerStarted) {
  //             this.startTimer();
  //           }
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }

  public changeTimeValue(value: number): void {
    this.timeValue = value;
    this.newTime.emit(this.timeValue);
  }
}
