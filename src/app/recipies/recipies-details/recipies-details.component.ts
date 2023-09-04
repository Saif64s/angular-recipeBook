import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css'],
})
export class RecipiesDetailsComponent {
  @Input() detailsRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onClickAddtoSList() {
    this.recipeService.addIngredientsToShoppingList(
      this.detailsRecipe.$ingredient
    );
  }
}
