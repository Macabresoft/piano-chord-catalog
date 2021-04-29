import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chord } from './chord';
import { ChordShape } from '../chord-shape';
import { ChordShapesService } from '../chord-shapes.service';
import { Note } from '../note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['../app.component.css', './chords.component.css']
})
export class ChordsComponent implements OnInit {

  chords: Chord[] = [];

  constructor(
    private route: ActivatedRoute,
    private chordsService: ChordShapesService,
    private notesService: NotesService) { 
      this.route.paramMap.subscribe(() => this.chords = this.getChords());
    }

  ngOnInit(): void {
    this.chords = this.getChords();
  }

  getChords(): Chord[] {
    const route = this.route.snapshot.paramMap.get('chord-shape');
    const chordShape = this.chordsService.getChordShape(route);

    if (chordShape) {
      let chords = new Array<Chord>(this.notesService.numberOfNotes);

      for (let index = 0; index < chords.length; index++) {
        chords[index] = this.getChord(this.notesService.getNote(index), chordShape);      
      }
  
      return chords.sort((a, b) => a.name > b.name ? 1 : a.name === b.name ? 0 : -1);
    }
    else {
      return [];
    }
  }

  getChord(rootNote: Note, chordShape: ChordShape): Chord {
    let notes = new Array<Note>(chordShape.noteIndexes.length);

    for (let index = 0; index < notes.length; index++) {
      notes[index] = this.notesService.getNote(rootNote.index + chordShape.noteIndexes[index]);      
    }

    return { name: rootNote.name + ' ' + chordShape.name, notes: notes};
  }
}
