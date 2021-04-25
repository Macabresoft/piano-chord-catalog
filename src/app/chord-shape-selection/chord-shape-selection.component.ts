import { Component, OnInit } from '@angular/core';
import { ChordShape } from '../chord-shape';
import { ChordsService } from '../chords.service';

@Component({
  selector: 'app-chord-shape-selection',
  templateUrl: './chord-shape-selection.component.html',
  styleUrls: ['../app.component.css', './chord-shape-selection.component.css']
})
export class ChordShapeSelectionComponent implements OnInit {

  chordShapes: ChordShape[] = [];

  constructor(private chordsService: ChordsService) { }

  ngOnInit(): void {
    this.chordsService.getChordShapes().subscribe(chordShapes => this.chordShapes = chordShapes);
  }
}
