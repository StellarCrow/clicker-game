import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/models/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  public users: IUser[];
  public username: string;

  @Input() user: IUser;
  @Input() isNewHighscore: boolean;

}
