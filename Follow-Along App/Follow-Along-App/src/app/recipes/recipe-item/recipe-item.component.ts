import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input () recipe: recipe;
 @Output() recipeSelected = new EventEmitter<void>();

 constructor(){

 }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 onSelected() {
this.recipeSelected.emit();
 }
}
