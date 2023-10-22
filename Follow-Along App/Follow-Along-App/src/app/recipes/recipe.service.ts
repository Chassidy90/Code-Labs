import {  Injectable } from "@angular/core";
import { recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()

export class RecipeService {
  getRecipe(id: number) {
    throw new Error('Method not implemented.');
  }



  private recipes:recipe[] = [
    new recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries',20)
      ]),


      new recipe(
        'Big Fat Burger',
        'What else do you need to say?',
         'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
         [
          new Ingredient('Buns', 2),
          new Ingredient('Meat',1)
         ])
  ];

  constructor(private slService: ShoppingListService ){

  }

  getRecipes(){
    return this.recipes.slice();
  }

getRecipes(index: number){
  return this.recipes[index];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
  }
}
