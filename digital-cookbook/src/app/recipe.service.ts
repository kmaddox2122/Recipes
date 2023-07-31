import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private webRequestService: WebRequestService) { }

  //CRUD category

  createCategory(name: string) {
    //send a web request to create a category
   return this.webRequestService.post('category', {name});
  }

  getCategory() {
    return this.webRequestService.get('category');
  }

  //CRUD recipe

  createRecipe(name: string) {
    //send a web request to create a recipe
   return this.webRequestService.post('category/:categoryId/recipe', {name});
  }

  getRecipe() {
    return this.webRequestService.get('recipe');
  }


}
