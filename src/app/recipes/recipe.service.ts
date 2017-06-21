import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mikes Homemade Pizza',
      'A great recipe for homemade pizza dough and sauce. The sauce is especially good. Top with whatever you like',
      'http://images.media-allrecipes.com/userphotos/560x315/1347074.jpg',
      [
        new Ingredient('Dough', 1),
        new Ingredient('Cheese', 3),
        new Ingredient('Pepperoni', 100)
      ]),
    new Recipe(
      'Black Beans and Rice',
      'The perfect meal! Preparation Time: 20 minutes. This recipe is from The WEBB Cooks, articles and recipes ' +
      'by Robyn Webb, courtesy of the American Diabetes Association',
      'http://images.media-allrecipes.com/userphotos/560x315/2119665.jpg',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Black beans', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }
}


