import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './shared/components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommentsComponent } from './shared/components/game/comments/comments.component';
import { OldGamesComponent } from './old-games/old-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { AppRoutingModule } from './app-routing.module';
import { Route } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import{ HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CommentsComponent,
    OldGamesComponent,
    NewGamesComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
