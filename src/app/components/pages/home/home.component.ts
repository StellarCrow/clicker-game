import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public username = 'Username';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const username = this.userService.getUser();
    if (username) {
      this.username = username;
    }
  }

  public onSubmit(event: CustomEvent): void {
    event.preventDefault();
    const username = this.username.toLowerCase();
    this.userService.setUser(username);
    this.router.navigate(['/game']);
  }
}
