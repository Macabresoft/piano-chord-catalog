import { Component, OnInit, Input } from '@angular/core';
import { PianoKey } from './piano-key';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {

  @Input() key?: PianoKey;

  constructor() { }

  ngOnInit(): void {
  }
}