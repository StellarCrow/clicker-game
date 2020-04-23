import { IUser } from 'src/app/models/IUser';
import { Injectable, OnDestroy } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private users: IUser[];

  constructor(private localStorageService: LocalStorageService) {
    this.users = this.localStorageService.getItem('users') || [];
  }

  public addUserToStatistics(user: IUser): void {
    const username = user.name;
    if (!this.isUserExist(username)) {
      this.users.push(user);
    } else {
      const userIndex = this.users.findIndex((player: IUser) => player.name === user.name && player.score < user.score);
      if (userIndex > -1) {
        this.users.splice(userIndex, 1, user);
      }
    }
    this.localStorageService.setItem('users', this.users);
  }

  public getStatistics(): IUser[] {
    const users = this.users;
    users.sort((a: IUser, b: IUser) => b.score - a.score);
    return users;
  }

  public isWinner(player: IUser): boolean {
    const highscore = Math.max.apply(
      Math,
      this.users.map((user) => user.score)
    );
    return player.score > highscore;
  }

  private isUserExist(username: string): boolean {
    return this.users.some((user) => user.name === username);
  }
}
