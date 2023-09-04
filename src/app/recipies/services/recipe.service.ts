import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test for description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM86DVrKAmC2xI654py7cLmaudlmgnFvzLVIHayUPLA&s',
      [
        new Ingredient('Apple', 5),
        new Ingredient('Banana', 5),
        new Ingredient('Meat', 5),
      ]
    ),
    new Recipe(
      'A test recipe 2',
      'test for description 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM86DVrKAmC2xI654py7cLmaudlmgnFvzLVIHayUPLA&s',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Banana', 5),
        new Ingredient('Apple', 5),
      ]
    ),
  ];

  /**
   * Getter $recipes
   * @return {Recipe[] }
   */
  public get $recipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredient(ingredient);
  }

  constructor(private slService: ShoppingListService) {}
}
