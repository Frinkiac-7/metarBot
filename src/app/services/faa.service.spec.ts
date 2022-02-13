import { TestBed } from '@angular/core/testing';

import { FaaService } from './faa.service';

describe('FaaService', () => {
  let service: FaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
