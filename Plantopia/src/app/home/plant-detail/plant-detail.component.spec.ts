import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailComponent } from './plant-detail.component';

describe('PlantDetailComponent', () => {
  let component: PlantDetailComponent;
  let fixture: ComponentFixture<PlantDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantDetailComponent]
    });
    fixture = TestBed.createComponent(PlantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
