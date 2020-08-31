import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseInfoComponent } from './advertise-info.component';

describe('AdvertiseInfoComponent', () => {
  let component: AdvertiseInfoComponent;
  let fixture: ComponentFixture<AdvertiseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
