import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username = 'Username';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onInputChange({ target }) {
    this.username = target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    const users = localStorage.getItem('users');
    const usersArray = JSON.parse(users) || [];
    const user = { user: this.username, score: 0 };
    usersArray.push(user);
    localStorage.setItem('user', this.username);
    localStorage.setItem('users', JSON.stringify(usersArray));
    this.router.navigate(['/game']);
  }
}
