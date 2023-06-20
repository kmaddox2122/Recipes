import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private webRequestService: WebRequestService) { }

  createCategory(name: string) {
    //send a web request to create a category
   return this.webRequestService.post('category', {name});
  }
}
