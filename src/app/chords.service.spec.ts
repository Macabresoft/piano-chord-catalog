import { TestBed } from '@angular/core/testing';

import { ChordsService } from './chords.service';

describe('ChordsService', () => {
  let service: ChordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
