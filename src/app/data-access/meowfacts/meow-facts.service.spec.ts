import { TestBed } from '@angular/core/testing';

import { MeowFactsService } from './meow-facts.service';

describe('MeowFactsService', () => {
  let service: MeowFactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeowFactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
