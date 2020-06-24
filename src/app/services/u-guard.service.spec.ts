import { TestBed } from '@angular/core/testing';

import { UGuardService } from './u-guard.service';

describe('MGuardService', () => {
  let service: UGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
