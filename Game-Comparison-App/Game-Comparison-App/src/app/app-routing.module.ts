import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { OldGamesComponent } from './old-games/old-games.component';
import { NewGamesComponent } from './new-games/new-games.component';
import { AppModule } from './app.module';
import { GameDetailsComponent } from './game-details/game-details.component';


const paths: Route[] = [
  { path: 'home-page',},
  { path: 'old-games', component: OldGamesComponent },
  { path: 'new-games', component: NewGamesComponent },
  {
    path: 'game',
    children: [{ path: ':game', component: GameDetailsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(paths)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
