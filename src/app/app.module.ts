import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChordShapeSelectionComponent } from './chord-shape-selection/chord-shape-selection.component';
import { ChordsComponent } from './chords/chords.component';
import { PianoComponent } from './piano/piano.component';
import { CGroupKeysComponent } from './c-group-keys/c-group-keys.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChordShapeSelectionComponent,
    ChordsComponent,
    PianoComponent,
    CGroupKeysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };