import { RecipeService } from './../recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-recipe',
  templateUrl: './manual-recipe.component.html',
  styleUrls: ['./manual-recipe.component.css']
})
export class ManualRecipeComponent {

  constructor(private recipeService: RecipeService) {

  }

  createNewCategory() {
    this.recipeService.createCategory('Testing').subscribe((response: any) => {
      console.log(response);
    })
  }

}
