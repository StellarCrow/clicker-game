import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { TimerComponent, FormatTimePipe } from './components/timer/timer.component';
import { LevelsComponent } from './components/levels/levels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TimerComponent,
    FormatTimePipe,
    LevelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
