import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRecipeComponent } from './manual-recipe.component';

describe('ManualRecipeComponent', () => {
  let component: ManualRecipeComponent;
  let fixture: ComponentFixture<ManualRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
