import { TestBed } from '@angular/core/testing';

import { BluePrint1Service } from './blue-print1.service';

describe('BluePrint1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluePrint1Service = TestBed.get(BluePrint1Service);
    expect(service).toBeTruthy();
  });
});
