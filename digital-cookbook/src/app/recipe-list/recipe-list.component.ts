import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent {
  isShown: boolean = false;

  toggleShowHide() {
    this.isShown = !this.isShown;
  }
}
