import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayenquiryComponent } from './displayenquiry.component';

describe('DisplayenquiryComponent', () => {
  let component: DisplayenquiryComponent;
  let fixture: ComponentFixture<DisplayenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
