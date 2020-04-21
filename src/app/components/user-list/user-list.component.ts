import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users: IUser[];

  ngOnInit(): void {
    const usersString = localStorage.getItem('users');
    const users = JSON.parse(usersString) || [];
    this.users = users.sort((a: IUser, b: IUser) => b.score - a.score);
  }
}
