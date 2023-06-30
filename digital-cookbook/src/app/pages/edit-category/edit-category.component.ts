import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

  //todo: create model for category type
  category!: any[];

  constructor(private recipeService: RecipeService) {
  }

  createNewCategory(name:string) {
    this.recipeService.createCategory(name).subscribe((response: any) => {
      console.log(response);
      //now navigate to /category/response._id
    })
  }

  // public trackItem (index: number, category: any) {
  //   return category.name;
  // }

  ngOnInit(): void {
    this.recipeService.getCategory().subscribe((category: any) => {
      console.log("new category page", category);
      this.category = category;
    })
  }

}
