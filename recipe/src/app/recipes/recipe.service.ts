import {Injectable,EventEmitter} from '@angular/core'

import {Ingredient} from '../shared/ingredient.model'
import {Recipe} from './recipe.model'
import{ ShoppingListService} from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService{
  constructor(private slService:ShoppingListService){}

  recipeSelected=new EventEmitter<Recipe>()
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

  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients)
  }

}
