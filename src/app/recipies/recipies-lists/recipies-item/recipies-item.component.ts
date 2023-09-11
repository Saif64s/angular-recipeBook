import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css'],
})
export class RecipiesItemComponent implements OnInit {
  ngOnInit(): void {}
  @Input() recipe: Recipe;
  @Input() index: number;
}
