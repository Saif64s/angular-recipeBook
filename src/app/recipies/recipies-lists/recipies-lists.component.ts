import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-lists',
  templateUrl: './recipies-lists.component.html',
  styleUrls: ['./recipies-lists.component.css'],
})
export class RecipiesListsComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test for description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM86DVrKAmC2xI654py7cLmaudlmgnFvzLVIHayUPLA&s'
    ),
    new Recipe(
      'A test recipe 2',
      'test for description 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM86DVrKAmC2xI654py7cLmaudlmgnFvzLVIHayUPLA&s'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
