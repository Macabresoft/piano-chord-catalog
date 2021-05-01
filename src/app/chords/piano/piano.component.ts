import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/note.interface';
import { NotesService } from '../../notes.service';
import { PianoKey } from './key/piano-key.interface';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['../../app.component.css', './piano.component.css']
})
export class PianoComponent implements OnInit {

  @Input() highlightedNotes?: Note[];
  public keys: PianoKey[] = Array<PianoKey>();

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    if (this.highlightedNotes && this.highlightedNotes.length > 0) {
      let notes = this.notesService.getNotes();
      let highlightedNoteIndex = 0;

      while (highlightedNoteIndex < this.highlightedNotes.length) {
        let highlightedNote = this.highlightedNotes[highlightedNoteIndex];

        notes.forEach(note => {
          if (highlightedNote && note.index === highlightedNote.index) {
            this.keys.push({ note: note, isHighlighted: true});
            highlightedNote = this.highlightedNotes[++highlightedNoteIndex];
          }
          else {
            this.keys.push({ note: note, isHighlighted: false});
          }
        });
      }

      if (!this.highlightedNotes[0].isGroupedWithC) {
        notes.filter(note => note.isGroupedWithC).forEach(() => {
          this.keys.shift();
        });
      }

      if (this.highlightedNotes[this.highlightedNotes.length - 1].isGroupedWithC) {
        notes.filter(note => !note.isGroupedWithC).forEach(() => {
          this.keys.pop();
        });
      }
    }
  }
}