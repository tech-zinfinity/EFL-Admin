import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryInfoComponent } from './subcategory-info.component';

describe('SubcategoryInfoComponent', () => {
  let component: SubcategoryInfoComponent;
  let fixture: ComponentFixture<SubcategoryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
