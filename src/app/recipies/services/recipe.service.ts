import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Double Decker Cheese Burger',
      'test for description',
      'https://freshburger.ca/wp-content/uploads/2020/09/highcompress_Kenix-Angus.png',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Letuce', 3),
        new Ingredient('Cheese', 3),
        new Ingredient('Meat', 2),
      ]
    ),
    new Recipe(
      'Mutton Biriyani with Raita',
      'test for description 2',
      'https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg',
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
