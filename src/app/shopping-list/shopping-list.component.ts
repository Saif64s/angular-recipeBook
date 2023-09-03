import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredient: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 2),
    new Ingredient('Potato', 2),
  ];

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredient.push(newIngredient);
  }
}
