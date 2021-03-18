import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from '../WelcomeScreenComponent/welcomeScreen.component';
import { Form } from './FormComponent/form.component';
import { GameScreenComponent } from '../GameScreenComponent/gameScreen.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { LogScreenComponent } from '../GameScreenComponent/LogScreenComponent/logScreen.component';
import { ControllerComponent } from '../GameScreenComponent/ControllerComponent/controller.component';
import { GameInfoComponent } from '../GameScreenComponent/GameInfoComponent/gameInfo.component';
import { filterPipe } from '../Pipes/filter.pipe';
import { sortPipe } from '../Pipes/sort.pipe';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    Form,
    GameScreenComponent,
    LogScreenComponent,
    ControllerComponent,
    GameInfoComponent,
    filterPipe,
    sortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeScreenComponent },
      { path: "game", component: GameScreenComponent },
      { path: "log", component: LogScreenComponent },
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
