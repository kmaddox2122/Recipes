import { ManualRecipeComponent } from './../manual-recipe/manual-recipe.component';
import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';

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

  open() {
    //This codeblock negates the dropdown in the nav -- popper.js issue?
    // this.manualRecipeModal = new bootstrap.Modal(document.getElementById('manualRecipeModal')!,{
    //   keyboard: false
    // })
    // this.manualRecipeModal.show();
  }

  save() {
    //TODO: Add logic to save recipe
    // this.manualRecipeModal?.toggle();
  }

  showModal = false;

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
