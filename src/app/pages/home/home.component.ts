import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public username = 'Username';

  constructor(private router: Router) {}

  public onInputChange({ target }: CustomEvent): void {
    this.username = (target as HTMLInputElement).value;
  }

  public onSubmit(event: CustomEvent): void {
    event.preventDefault();
    const username = this.username.toLowerCase();
    const users = localStorage.getItem('users');
    const usersArray = JSON.parse(users) || [];
    const user = { user: username, score: 0 };
    usersArray.push(user);
    localStorage.setItem('user', username);
    localStorage.setItem('users', JSON.stringify(usersArray));
    this.router.navigate(['/game']);
  }
}
