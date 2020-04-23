import { IUser } from 'src/app/models/IUser';
import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  public users: IUser[];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.users = this.statisticsService.getStatistics();
  }
}
