import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcomeScreen.component';
import { GameScreenComponent } from './gameScreen.component';
import { TetrisCoreModule } from 'ngx-tetris';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    GameScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
