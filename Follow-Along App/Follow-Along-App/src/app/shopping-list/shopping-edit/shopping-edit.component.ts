import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild ('nameInput') nameInputRef: ElementRef;
 @ViewChild ('ammountInput') ammountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();

 constructor(){ }

ngOnInit() {

}
onAddItem(){

const ingAmmount = (this.nameInputRef.nativeElement.value);
const ingName = (this.nameInputRef.nativeElement.value);
const newIngredient = new Ingredient(ingName, ingAmmount);
this.ingredientAdded.emit(newIngredient);
}

}
