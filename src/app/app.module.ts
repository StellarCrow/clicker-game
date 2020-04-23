import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { GameComponent } from './components/pages/game/game.component';
import { TimerComponent } from './components/timer/timer.component';
import { LevelsComponent } from './components/levels/levels.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { ResultsComponent } from './components/results/results.component';
import { StatisticsComponent } from './components/pages/statistics/statistics.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { OptionsComponent } from './components/options/options.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TimerComponent,
    FormatTimePipe,
    LevelsComponent,
    ResultsComponent,
    StatisticsComponent,
    UserListComponent,
    OptionsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
