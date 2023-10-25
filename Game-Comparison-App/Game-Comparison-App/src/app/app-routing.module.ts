import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { OldGamesComponent } from "./old-games/old-games.component";
import { NewGamesComponent } from "./new-games/new-games.component";
import { AppModule } from "./app.module";

const paths: Route[] = [
  {path: 'old-games', component: OldGamesComponent},
  {path: 'new-games', component: NewGamesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(paths)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
