import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcomeScreen.component';
import { GameScreenComponent } from './gameScreen.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { LogScreenComponent } from './logScreen.component';
import { filterPipe } from './filter.pipe';
import { sortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    GameScreenComponent,
    LogScreenComponent,
    filterPipe,
    sortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TetrisCoreModule,
    FormsModule
  ],
  providers: [
    filterPipe,
    sortPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
