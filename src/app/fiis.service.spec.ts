import { TestBed } from '@angular/core/testing';

import { FiisService } from './fiis.service';

describe('FiisService', () => {
  let service: FiisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
