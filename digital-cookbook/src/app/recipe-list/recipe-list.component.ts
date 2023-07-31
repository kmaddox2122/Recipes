import { ManualRecipeComponent } from './../manual-recipe/manual-recipe.component';
import { Component, HostListener, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  manualRecipeModal: Modal | undefined;

  public currentWindowWidth!: number;

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  @HostListener('window:resize')
    onResize() {
    this.currentWindowWidth = window.innerWidth
}

  isShown: boolean = false;

  toggleShowHide() {
    this.isShown = !this.isShown;
  }

  showChooseFile: boolean = false;

  showChooseFileButton() {
    this.showChooseFile = true;
    this.showURL = false;
  } 

  showURL: boolean = false;

  showURLButton() {
    this.showURL = true;
    this.showChooseFile = false;
  }

}
