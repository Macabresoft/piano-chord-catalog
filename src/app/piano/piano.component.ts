import { Component, OnInit, Input } from '@angular/core';
import { Chord } from '../chord';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['../app.component.css', './piano.component.css']
})
export class PianoComponent implements OnInit {

  @Input() chord?: Chord;

  useAlternateLayout: boolean;

  constructor() { }

  ngOnInit(): void {
    if (this.chord && this.chord.notes[0]) {
      this.useAlternateLayout = !this.chord.notes[0].isGroupedWithC;
    }
  }
}
