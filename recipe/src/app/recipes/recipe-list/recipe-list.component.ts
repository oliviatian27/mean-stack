import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('test recipe','for test','https://static01.nyt.com/images/2018/05/23/dining/23fruit/23fruit-superJumbo.jpg?quality=90&auto=webp')
  ];
  constructor() { }

  ngOnInit() {
  }

}
