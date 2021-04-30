import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChordShape } from './chord-shape';

@Injectable({
  providedIn: 'root'
})
export class ChordShapesService {

  private readonly chordShapes: ChordShape[] = [
    { name: 'Major', route: 'major', noteIndexes: [0, 4, 7] },
    { name: 'Minor', route: 'minor', noteIndexes: [0, 3, 7] },
    { name: 'Augmented', route: 'augmented', noteIndexes: [0, 4, 8] },
    { name: 'Diminished', route: 'diminished', noteIndexes: [0, 3, 6] },
    { name: 'Suspended 2nd', route: 'suspended-second', noteIndexes: [0, 2, 7] },
    { name: 'Suspended 4th', route: 'suspended-fourth', noteIndexes: [0, 5, 7] },
    // { name: 'Major 7th', route: 'major-seventh', noteIndexes: [0, 4, 7, 11] },
    // { name: 'Minor 7th', route: 'minor-seventh', noteIndexes: [0, 3, 7, 10] },
    // { name: 'Dominant 7th', route: 'dominant-seventh', noteIndexes: [0, 4, 7, 10] },
    // { name: 'Major 9th', route: 'major-ninth', noteIndexes: [0, 4, 7, 11, 14] },
    // { name: 'Minor 9th', route: 'minor-ninth', noteIndexes: [0, 3, 7, 10, 14] },
    // { name: 'Dominant 9th', route: 'dominant-ninth', noteIndexes: [0, 4, 7, 10, 14] }
  ]

  constructor() { 
  }

  getChordShapes(): Observable<ChordShape[]> {
    return of(this.chordShapes);
  }

  getChordShape(route: string): ChordShape {
    return this.chordShapes.find(chordShape => chordShape.route === route);
  }
}
