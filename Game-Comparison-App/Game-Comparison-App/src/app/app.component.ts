import { Component } from '@angular/core';
import { GameService } from './shared/services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false
  collapsed = true
  title = 'Game-Comparison-App';

  oldGames = false

  games = []

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.fetchGames()
  }

  toggleGame() {
    this.oldGames = !this.oldGames
    this.fetchGames()
  }

  fetchGames() {
    if (this.oldGames) {
      this.games = this.gameService.getOldGames()
    } else {
      this.games = this.gameService.getNewGames()
    }
  }


}
