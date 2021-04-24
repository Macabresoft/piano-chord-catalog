import { Component, OnInit } from '@angular/core';
import { Chord } from '../chord';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-minor-chords',
  templateUrl: './minor-chords.component.html',
  styleUrls: ['./minor-chords.component.css']
})
export class MinorChordsComponent implements OnInit {

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

    return chords;
  }

  getChord(rootNote: Note): Chord {
    let notes = new Array<Note>(3);
    notes[0] = rootNote;
    notes[1] = this.notesService.getNote(rootNote.index + 3);
    notes[2] = this.notesService.getNote(rootNote.index + 7);
    return { name: rootNote.name + ' Minor', notes: notes};
  }
}
