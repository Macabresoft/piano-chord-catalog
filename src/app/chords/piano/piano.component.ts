import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from '../../notes.service';
import { Chord } from '../chord';
import { PianoKey } from './key/piano-key';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['../../app.component.css', './piano.component.css']
})
export class PianoComponent implements OnInit {

  @Input() chord?: Chord;
  public keys: PianoKey[] = Array<PianoKey>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    if (this.chord && this.chord.notes.length > 0 && this.chord.notes[0]) {
      let notes = this.notesService.getNotes();
      let chordNoteIndex = 0;

      while (chordNoteIndex < this.chord.notes.length) {
        let chordNote = this.chord.notes[chordNoteIndex];

        notes.forEach(note => {
          console.log('Chord at index ' + chordNoteIndex + ' = ' + this.chord.notes[chordNoteIndex]);
          if (chordNote && note.index === chordNote.index) {
            this.keys.push({ note: note, isHighlighted: true});
            chordNote = this.chord.notes[++chordNoteIndex];
          }
          else {
            this.keys.push({ note: note, isHighlighted: false});
          }
        });
      }

      if (!this.chord.notes[0].isGroupedWithC) {
        notes.filter(note => note.isGroupedWithC).forEach(() => {
          this.keys.shift();
        });
      }

      if (this.chord.notes[this.chord.notes.length - 1].isGroupedWithC) {
        notes.filter(note => !note.isGroupedWithC).forEach(() => {
          this.keys.pop();
        });
      }
    }
  }

  hasNote(index: number) : boolean {
    return this.chord.notes.some(x => x.index === index);
  }
}