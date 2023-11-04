import { Component } from '@angular/core';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-old-games',
  templateUrl: './old-games.component.html',
  styleUrls: ['./old-games.component.css'],
})
export class OldGamesComponent {
  constructor(private gameService: GameService) {}
  games: any;
  ngOnInit() {
    this.games = this.gameService.getOldGames()
  }
}
