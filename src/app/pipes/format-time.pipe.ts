import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'formatTime' })
export class FormatTimePipe implements PipeTransform {
  transform(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + (seconds % 60)).slice(-2);
  }
}