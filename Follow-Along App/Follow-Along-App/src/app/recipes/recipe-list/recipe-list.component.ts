import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:recipe[] = [
  new recipe('A Test Recipe','This is simply a test', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/01/Banana-Nut-Bread.jpg?resize=1360,2040')
];
constructor() {}
ngOnInit(): void {

}
}
