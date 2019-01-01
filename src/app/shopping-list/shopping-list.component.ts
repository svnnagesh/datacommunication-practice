import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Oranges', 10),
    new Ingredient('Banana', 10),
    new Ingredient('Custard Apple', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(xx:Ingredient) {
    this.ingredients.push(xx);
  }

}
