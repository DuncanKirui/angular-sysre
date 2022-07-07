import { TestBed } from '@angular/core/testing';

import { CorsService } from './cors.service';

describe('CorsService', () => {
  let service: CorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
