import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisplayproductComponent } from './admindisplayproduct.component';

describe('AdmindisplayproductComponent', () => {
  let component: AdmindisplayproductComponent;
  let fixture: ComponentFixture<AdmindisplayproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindisplayproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindisplayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
