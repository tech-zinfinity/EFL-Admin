import { TestBed } from '@angular/core/testing';

import { AdvertisesService } from './advertises.service';

describe('AdvertisesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertisesService = TestBed.get(AdvertisesService);
    expect(service).toBeTruthy();
  });
});
