import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<recipe>();
  recipes:recipe[] = [
  new recipe('A Test Recipe','This is simply a test', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/01/Banana-Nut-Bread.jpg?resize=1360,2040')
  new recipe('Another Test Recipe','This is simply a test', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/01/Banana-Nut-Bread.jpg?resize=1360,2040')
];
constructor() {}
ngOnInit() {

}

onRecipeSelected(recipe: recipe) {
this.recipeWasSelected.emit(recipe);
}

}
function Output(): (target: RecipeListComponent, propertyKey: "recipeWasSelected") => void {
  throw new Error('Function not implemented.');
}

