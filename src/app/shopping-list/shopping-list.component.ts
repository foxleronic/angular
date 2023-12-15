import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}

  /**
   * Adds an ingredient to the list of ingredients.
   * @param ingredient - The ingredient to be added.
   */
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
