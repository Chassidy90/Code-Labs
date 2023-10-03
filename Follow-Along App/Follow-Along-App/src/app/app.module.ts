import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/haeder.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }