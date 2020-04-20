import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IUser from 'src/app/models/IUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public username = 'Username';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const username = localStorage.getItem('user');
    if (username) {
      this.username = username;
    }
  }

  public onSubmit(event: CustomEvent): void {
    event.preventDefault();
    const username = this.username.toLowerCase();
    const users = localStorage.getItem('users');
    const usersArray = JSON.parse(users) || [];
    if (!this.isUsernameExist(usersArray)) {
      const user: IUser = { user: username, score: 0 };
      usersArray.push(user);
      localStorage.setItem('users', JSON.stringify(usersArray));
    }
    localStorage.setItem('user', username);
    this.router.navigate(['/game']);
  }

  private isUsernameExist(users: IUser[]): boolean {
    return users.some((user) => user.user === this.username.toLowerCase());
  }
}
