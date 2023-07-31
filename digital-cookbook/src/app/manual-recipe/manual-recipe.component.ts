import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-manual-recipe',
  templateUrl: './manual-recipe.component.html',
  styleUrls: ['./manual-recipe.component.css']
})
export class ManualRecipeComponent implements OnInit {

    //todo: create model for category type
  category!: any[];

    //TODO: create a model for recipe type
    public recipe: any;
    
    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}
    

    // 7/26/23 this method crashes back-end server.
    createNewRecipe() {
      this.recipeService.createRecipe('test recipe').subscribe((response: any) => {
      console.log(response);
      })
    }
    // createNewRecipe(name:string) {
    //   this.recipe.push({name: name});
    //   this.recipeService.createRecipe(name).subscribe((response: any) => {
    //   })
    // }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      })
      this.recipeService.getRecipe().subscribe((recipe: any) => {
        console.log("New recipe", recipe);
        this.recipe = recipe;
      })
    
    this.recipeService.getCategory().subscribe((category: any) => {
      console.log("manual recipe page", category);

      this.category = category;
    })

  }
}
