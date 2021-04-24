import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private readonly notes: Note[] = [
    { index: 0, name: 'C', isNatural: true, isGroupedWithC: true},
    { index: 1, name: 'C#', isNatural: false, isGroupedWithC: true},
    { index: 2, name: 'D', isNatural: true, isGroupedWithC: true},
    { index: 3, name: 'D#', isNatural: false, isGroupedWithC: true},
    { index: 4, name: 'E', isNatural: true, isGroupedWithC: true},
    { index: 5, name: 'F', isNatural: true, isGroupedWithC: false},
    { index: 6, name: 'F#', isNatural: false, isGroupedWithC: false},
    { index: 7, name: 'G', isNatural: true, isGroupedWithC: false},
    { index: 8, name: 'G#', isNatural: false, isGroupedWithC: false},
    { index: 9, name: 'A', isNatural: true, isGroupedWithC: false},
    { index: 10, name: 'A#', isNatural: false, isGroupedWithC: false},
    { index: 11, name: 'B', isNatural: true, isGroupedWithC: false}
  ]

  public readonly numberOfNotes: number = 12;

  constructor() { 
  }

  getNote(index: number): Note {
    while (index >= this.numberOfNotes) {
      index = index - this.numberOfNotes;
    }

    return this.notes[index];
  }

  getNoteIndex(note: Note): number {
    return this.notes.indexOf(note);
  }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }
}
