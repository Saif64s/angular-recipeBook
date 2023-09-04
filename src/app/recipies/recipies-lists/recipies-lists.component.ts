import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipies-lists',
  templateUrl: './recipies-lists.component.html',
  styleUrls: ['./recipies-lists.component.css'],
})
export class RecipiesListsComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.$recipes;
  }
}
