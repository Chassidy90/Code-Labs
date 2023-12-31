import {  Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";


@Injectable()

export class RecipeService {
getRecipes() {
  throw new Error("Method not implemented.");
}
recipesChanged = new Subject<Recipe[]>();





  // private recipes:Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries',20)
  //     ]),


  //     new Recipe(
  //       'Big Fat Burger',
  //       'What else do you need to say?',
  //        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  //        [
  //         new Ingredient('Buns', 2),
  //         new Ingredient('Meat',1)
  //        ])
  // ];
  private recipes: Recipe[]=[];

  constructor(private slService: ShoppingListService ){}

  setRecipes(Recipe: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

getRecipes(index: number){
  return this.recipes[index];
}

  addIngredientsToShoppingList(Ingredient: Ingredient[]){
this.slService.addIngredients(ingredients);
  }

addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
}

UpdateRecipe(index: number, NewRecipe: Recipe){
this.recipes[index] = NewRecipe;
this.recipesChanged.next(this.recipes.slice());
}

deleteRecipe(index: number){
  this.recipes.splice(index,1);
  this.recipesChanged.next(this.recipes.slice());
}

}
function getRecipes() {
  throw new Error("Function not implemented.");
}

