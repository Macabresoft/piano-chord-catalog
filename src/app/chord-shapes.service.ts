import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChordShape } from './chord-shape';

@Injectable({
  providedIn: 'root'
})
export class ChordShapesService {

  private readonly chordShapes: ChordShape[] = [
    { name: 'Major', route: 'major', noteIndexes: [0, 4, 7] },
    { name: 'Minor', route: 'minor', noteIndexes: [0, 3, 7] }
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
