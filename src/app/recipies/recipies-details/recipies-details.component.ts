import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css'],
})
export class RecipiesDetailsComponent {
  @Input() detailsRecipe: Recipe;
}
