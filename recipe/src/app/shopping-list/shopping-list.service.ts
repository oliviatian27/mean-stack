import { Injectable,EventEmitter } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService{
  ingredientChanged=new EventEmitter<Ingredient[]>()
  constructor() { }
  private ingredients:Ingredient[]=[
    new Ingredient('apple',3),
    new Ingredient('peach',8)
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    // this.ingredients=this.ingredients.concat(ingredients)
  }
}
