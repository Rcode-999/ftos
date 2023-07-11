import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckComponent } from './foodtruck.component';

describe('FoodtruckComponent', () => {
  let component: FoodtruckComponent;
  let fixture: ComponentFixture<FoodtruckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodtruckComponent]
    });
    fixture = TestBed.createComponent(FoodtruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
