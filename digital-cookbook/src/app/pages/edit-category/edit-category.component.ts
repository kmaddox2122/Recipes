import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{

  //todo: create model for category type
  public category: any[] = [];

  constructor(private recipeService: RecipeService) {
  }

  createNewCategory(name:string) {
    this.category.push({ name: name});
    this.recipeService.createCategory(name).subscribe((response: any) => {
    })
  }

  ngOnInit(): void {
    this.recipeService.getCategory().subscribe((category: any) => {
      console.log("new category page", category);
      this.category = category;
    })
  }

}
