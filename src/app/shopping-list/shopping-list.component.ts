import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredient: Ingredient[];

  constructor(private slService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredient = this.slService.$ingredient;
    this.slService.ingredientsChanged.subscribe((ingredient: Ingredient[]) => {
      this.ingredient = ingredient;
    });
  }
}
