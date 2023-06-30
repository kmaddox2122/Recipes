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

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }
    )
    
    this.recipeService.getCategory().subscribe((category: any) => {
      console.log("manual recipe page", category);

      this.category = category;
    })

  }
}
