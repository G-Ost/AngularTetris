import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from '../WelcomeScreenComponent/welcomeScreen.component';
import { Form } from '../WelcomeScreenComponent/FormComponent/form.component';
import { GameScreenComponent } from '../GameScreenComponent/gameScreen.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { LogScreenComponent } from '../GameScreenComponent/LogScreenComponent/logScreen.component';
import { ScoreScreenComponent } from '../GameScreenComponent/ScoreScreenComponent/scoreScreen.component';
import { GameInfoComponent } from '../GameScreenComponent/GameInfoComponent/gameInfo.component';
import { filterPipe } from '../Pipes/filter.pipe';
import { sortPipe } from '../Pipes/sort.pipe';
import { scoreSortPipe } from '../Pipes/scoreSort.pipe';
import { RouterModule } from '@angular/router'
import { scoreFilterPipe } from '../Pipes/scoreFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    Form,
    GameScreenComponent,
    LogScreenComponent,
    ScoreScreenComponent,
    GameInfoComponent,
    filterPipe,
    sortPipe,
    scoreSortPipe,
    scoreFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeScreenComponent },
      { path: "game", component: GameScreenComponent },
      { path: "log", component: LogScreenComponent },
      { path: "scores", component: ScoreScreenComponent },
      { path: "**", redirectTo: "welcome" }
    ])
  ],
  providers: [
    filterPipe,
    sortPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
