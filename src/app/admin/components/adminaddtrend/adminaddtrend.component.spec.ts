import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddtrendComponent } from './adminaddtrend.component';

describe('AdminaddtrendComponent', () => {
  let component: AdminaddtrendComponent;
  let fixture: ComponentFixture<AdminaddtrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddtrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddtrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
