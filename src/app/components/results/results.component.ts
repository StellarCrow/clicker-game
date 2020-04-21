import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit, AfterViewInit {
  public users: IUser[];
  public username: string;

  @Input() score: number;

  ngOnInit(): void {
    const users = localStorage.getItem('users');
    this.users = JSON.parse(users) || [];
    this.username = localStorage.getItem('user');
  }

  ngAfterViewInit(): void {
    this.saveScore();
  }

  get isNewHighscore(): boolean {
    const highscore = Math.max.apply(
      Math,
      this.users.map((user) => user.score)
    );
    return highscore <= this.score;
  }

  private saveScore(): void {
    const user = { name: this.username, score: this.score };
    const userIndex = this.users.findIndex((player: IUser) => player.name === this.username && player.score < this.score);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1, user);
      const saveUsers = JSON.stringify(this.users);
      localStorage.setItem('users', saveUsers);
    }
  }
}
