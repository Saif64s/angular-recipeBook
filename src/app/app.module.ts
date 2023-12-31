import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';

import { RecipiesDetailsComponent } from './recipies/recipies-details/recipies-details.component';
import { RecipiesItemComponent } from './recipies/recipies-lists/recipies-item/recipies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipiesListsComponent } from './recipies/recipies-lists/recipies-lists.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './directives/dropdown.directive';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RepiceStartComponent } from './recipies/repice-start/repice-start.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipiesListsComponent,
    RecipiesDetailsComponent,
    RecipiesItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RepiceStartComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
  exports: [DropdownDirective],
})
export class AppModule {}
