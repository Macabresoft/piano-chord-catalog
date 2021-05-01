import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigSkullComponent } from './big-skull/big-skull.component';
import { ChordsComponent } from './chords/chords.component';
import { ChordShapeSelectionComponent } from './chord-shape-selection/chord-shape-selection.component';
import { KeyComponent } from './chords/piano/key/key.component';
import { PianoComponent } from './chords/piano/piano.component';
import { SplitPipe } from './split.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BigSkullComponent,
    ChordsComponent,
    ChordShapeSelectionComponent,
    KeyComponent,
    PianoComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };