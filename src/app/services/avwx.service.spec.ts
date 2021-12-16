import { TestBed } from '@angular/core/testing';

import { AvwxService } from './avwx.service';

describe('AvwxService', () => {
  let service: AvwxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvwxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
