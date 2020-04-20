import { Component, OnInit, Input } from '@angular/core';
import IUser from 'src/app/models/IUser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public users: IUser[];
  public username: string;
  public isWinner: boolean;

  @Input() score: number;

  ngOnInit(): void {
    const users = localStorage.getItem('users');
    this.users = JSON.parse(users) || [];
    this.username = localStorage.getItem('user');
    this.isWinner = this.isNewHighscore();
    this.saveScore();
  }

  private isNewHighscore(): boolean {
    const highscore = Math.max.apply(
      Math,
      this.users.map((user) => user.score)
    );
    return highscore < this.score;
  }

  private saveScore(): void {
    const user = { user: this.username, score: this.score };
    const usersString = localStorage.getItem('users');
    const users = JSON.parse(usersString);
    const userIndex = users.findIndex((player: IUser) => player.user === this.username && player.score < this.score);
    if (userIndex > -1) {
      users.splice(userIndex, 1, user);
      const saveUsers = JSON.stringify(users);
      localStorage.setItem('users', saveUsers);
    }
  }
}
