import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './shared/components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommentsComponent } from './shared/components/game/comments/comments.component';
import { OldGamesComponent } from './old-games/old-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { AppRoutingModule } from './app-routing.module';
import { Route } from '@angular/router';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReplyListComponent } from './reply-list/reply-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CommentsComponent,
    OldGamesComponent,
    NewGamesComponent,
    GameDetailsComponent,
    ReplyListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
