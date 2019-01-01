import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { myOwnRecipe, userDetails } from '../recipe.model';
import { myOwnHeader } from '../../header/header.model';
//import { userDetails } from '../recipe.model';

/* export class myOwnHeaderComponent {
  myHeader: myOwnHeader[] = [
    new myOwnHeader('About', 'Profile', 'Contact')
  ];
} */

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<myOwnRecipe>();

  recipes: myOwnRecipe[] = [
    new myOwnRecipe('A Test Recipe', 'This is a recipe description', 'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg'),
    new myOwnRecipe('A Test Recipe', 'This is a recipe description', 'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg'),
    new myOwnRecipe('A Test Recipe', 'This is a recipe description', 'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg')
    /* new myOwnRecipe('A Test Recipe', 'This is a recipe description', 'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg'),
    new myOwnRecipe('A Test Recipe', 'This is a recipe description', 'https://i.ndtvimg.com/i/2017-10/chicken-chettinad_620x330_41507621839.jpg') */
  ];

  newUserDetails: userDetails[] = [
    new userDetails('Nagesh', 'Vengal', 28, 'Hyderabad', 500006),
    new userDetails('Ganesh', 'Pilli', 29, 'Hyderabad', 123456),
    new userDetails('Rohith', 'Reddy', 28, 'Hyderabad', 523468)
  ];

  myHeader: myOwnHeader[] = [
    new myOwnHeader('About', 'Profile', 'Contact')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe:myOwnRecipe) {
    this.recipeWasSelected.emit(recipe);
  }

}