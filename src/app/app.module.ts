import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { TimerComponent } from './components/timer/timer.component';
import { LevelsComponent } from './components/levels/levels.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, GameComponent, TimerComponent, FormatTimePipe, LevelsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
