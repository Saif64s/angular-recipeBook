import { EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredient: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 2),
    new Ingredient('Potato', 2),
  ];

  /**
   * Getter $ingredient
   * @return {Ingredient[] }
   */
  public get $ingredient(): Ingredient[] {
    return this.ingredient.slice();
  }
  addIngreditent(ingredient: Ingredient) {
    this.ingredient.push(ingredient);
    this.ingredientsChanged.emit(this.$ingredient);
  }

  addIngredient(ingredients: Ingredient[]) {
    this.ingredient.push(...ingredients);
    this.ingredientsChanged.emit(this.$ingredient);
  }

  constructor() {}
}
