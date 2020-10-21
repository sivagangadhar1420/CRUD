import { TestBed } from '@angular/core/testing';

import { SecondSService } from './second-s.service';

describe('SecondSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondSService = TestBed.get(SecondSService);
    expect(service).toBeTruthy();
  });
});
