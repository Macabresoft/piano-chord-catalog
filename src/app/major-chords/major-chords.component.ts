import { Component, OnInit } from '@angular/core';
import { Chord } from '../chord';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-major-chords',
  templateUrl: './major-chords.component.html',
  styleUrls: ['./major-chords.component.css']
})
export class MajorChordsComponent implements OnInit {

  chords: Chord[] = [];

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.chords = this.getChords();
  }

  getChords(): Chord[] {
    let chords = new Array<Chord>(this.notesService.numberOfNotes);

    for (let index = 0; index < chords.length; index++) {
      chords[index] = this.getChord(this.notesService.getNote(index));      
    }

    return chords.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
  }

  getChord(rootNote: Note): Chord {
    let notes = new Array<Note>(3);
    notes[0] = rootNote;
    notes[1] = this.notesService.getNote(rootNote.index + 4);
    notes[2] = this.notesService.getNote(rootNote.index + 7);
    return { name: rootNote.name + ' Major', notes: notes};
  }
}
