import { Component,  OnInit, } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: recipe[];
  recipeService: any;

  constructor(provide recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }



}
function Output(): (
  target: RecipeListComponent,
  propertyKey: 'recipeWasSelected'
) => void {
  throw new Error('Function not implemented.');
}
