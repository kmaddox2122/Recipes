import { ManualRecipeComponent } from './../manual-recipe/manual-recipe.component';
import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Modal } from 'bootstrap';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { tap } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  manualRecipeModal: Modal | undefined;

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.HandsetLandscape, Breakpoints.Medium])
    .pipe(
      tap(value => console.log(value)),
      // distinctUntilChanged()
    );

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }
  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      this.currentBreakpoint = Breakpoints.Handset;
    } else if(this.breakpointObserver.isMatched(Breakpoints.HandsetLandscape)) {
      this.currentBreakpoint = Breakpoints.HandsetLandscape;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    }
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

}
