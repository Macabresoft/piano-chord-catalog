import { Component, OnInit } from '@angular/core';
import { ChordShape } from '../chord-shape.interface';
import { ChordShapesService } from '../chord-shapes.service';

@Component({
  selector: 'app-chord-shape-selection',
  templateUrl: './chord-shape-selection.component.html',
  styleUrls: ['../app.component.css', './chord-shape-selection.component.css']
})
export class ChordShapeSelectionComponent implements OnInit {

  chordShapes: ChordShape[] = [];

  constructor(private chordsService: ChordShapesService) { }

  ngOnInit(): void {
    this.chordsService.getChordShapes().subscribe(chordShapes => this.chordShapes = chordShapes);
  }
}
