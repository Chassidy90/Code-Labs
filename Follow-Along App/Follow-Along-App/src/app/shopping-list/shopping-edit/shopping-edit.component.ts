import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('ammountInput') ammountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}
  onAddItem() {
    const ingAmmount = this.nameInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmmount);

    this.slService.addIngredient(newIngredient);
  }
}
