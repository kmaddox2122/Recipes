import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManualRecipeComponent } from './manual-recipe/manual-recipe.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component'

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HomepageComponent,
    ManualRecipeComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'recipe-list', component: RecipeListComponent},
      {path: 'manual-recipe', component: ManualRecipeComponent},
      {path: 'home', component: HomepageComponent},
      {path: 'new-category', component: EditCategoryComponent},
      {path: 'category/:categoryId', component: ManualRecipeComponent},
      {path: '', component: HomepageComponent},
      {path: '*', component: HomepageComponent},
      
    ]),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    // forRoot suggested in multiple articles, but not showing in ngbModule??
    // NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
