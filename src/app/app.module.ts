import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChordShapeSelectionComponent } from './chord-shape-selection/chord-shape-selection.component';
import { ChordsComponent } from './chords/chords.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ChordShapeSelectionComponent,
    ChordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };