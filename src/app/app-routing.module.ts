import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RepiceStartComponent } from './recipies/repice-start/repice-start.component';
import { RecipiesDetailsComponent } from './recipies/recipies-details/recipies-details.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    children: [
      { path: '', component: RepiceStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipiesDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
