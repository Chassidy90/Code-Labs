import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/Http";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";



@Injectable({ providedIn: 'root'})

export class DataStorageService {
constructor(private http: HttpClient, private recipeService: RecipeService){

}

storeRecipes(){
const recipes = this. recipeService.getRecipes();
 return this.http.put('https://ng-course-recipe-book-8b88c-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe[ (response: any) => {
  console.log(response);
 }];
}

fetchRecipes(){
 return this.http.get<Recipe[]>('https://ng-course-recipe-book-8b88c-default-rtdb.firebaseio.com/recipes.json')
  .pipe (map(recipes => {
    return recipes.map(recipe =>{});
    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
    };
  })
  tap(recipes => {
    this.recipeService.setRecipes(recipes);
  })
)
  .subscribe(recipes => {
   this.recipeService.setRecipes(recipes);
  } )
}

}


