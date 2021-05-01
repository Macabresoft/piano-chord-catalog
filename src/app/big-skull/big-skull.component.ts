import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-skull',
  templateUrl: './big-skull.component.html',
  styleUrls: [ '../app.component.css', './big-skull.component.css']
})
export class BigSkullComponent implements OnInit {

  readonly bigSkull: string[] = [
    '        ',
    ' ###### ',
    ' # ## # ',
    ' # ## # ',
    ' ###### ',
    '  # ##  ',
    '        '
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
