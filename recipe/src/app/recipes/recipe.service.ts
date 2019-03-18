import {Injectable} from '@angular/core'

import {Ingredient} from '../shared/ingredient.model'
import {Recipe} from './recipe.model'
import {ShoppingListService} from '../shopping-list/shopping-list.service'
import {Subject} from "rxjs";

@Injectable()

export class RecipeService{

  recipesChanged=new Subject<Recipe[]>();
  // recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[]=[
    new Recipe('test recipe','for test',
    'https://static01.nyt.com/images/2018/05/23/dining/23fruit/23fruit-superJumbo.jpg?quality=90&auto=webp',
    [new Ingredient('peach',5),
      new Ingredient('cherry',1)  ]),
    new Recipe('a','f a',
    'https://qph.fs.quoracdn.net/main-qimg-6f463ee9c81d8355f13dd5fac6203b4f.webp',
    [new Ingredient('pear',10),
      new Ingredient('apple',1)])
  ];

  constructor(private slService:ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
