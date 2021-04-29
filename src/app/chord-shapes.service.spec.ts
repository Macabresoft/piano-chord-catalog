import { TestBed } from '@angular/core/testing';

import { ChordShapesService } from './chord-shapes.service';

describe('ChordsService', () => {
  let service: ChordShapesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChordShapesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
