import { TestBed } from '@angular/core/testing';

import { CreateCVService } from './create-cv.service';

describe('CreateCVService', () => {
  let service: CreateCVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
