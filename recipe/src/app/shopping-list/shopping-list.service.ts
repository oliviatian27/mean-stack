import { Injectable } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model'
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ShoppingListService{
  ingredientChanged=new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor() { }
  private ingredients:Ingredient[]=[
    new Ingredient('apple',3),
    new Ingredient('peach',8)
  ];

  getIngredients(){
    return this.ingredients.slice()
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice())
    // this.ingredients=this.ingredients.concat(ingredients)
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }
}
