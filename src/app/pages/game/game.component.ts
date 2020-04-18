import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  public username = '';
  public clickCount = 0;
  public showGif = false;

  constructor() {
    this.username = localStorage.getItem('user');
  }

  public incrementCount(): void {
    this.clickCount++;
    this.showGif = true;
  }

  public setGifStyle(): object {
    return { visibility: this.showGif ? 'visible' : 'hidden' };
  }
}
