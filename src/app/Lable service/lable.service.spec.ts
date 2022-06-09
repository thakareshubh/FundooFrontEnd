import { TestBed } from '@angular/core/testing';

import { LableService } from './lable.service';

describe('LableService', () => {
  let service: LableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
