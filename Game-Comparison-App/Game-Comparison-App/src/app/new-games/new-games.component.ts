import { Component } from '@angular/core';
import { Game, GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css'],
})
export class NewGamesComponent {
  constructor(private gameService: GameService) {}
  games: Game[] = []
  ngOnInit(){
    this.games = this.gameService.getNewGames()
  }
}
