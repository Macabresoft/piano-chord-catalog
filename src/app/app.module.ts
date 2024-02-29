import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigSkullComponent } from './big-skull/big-skull.component';
import { ChordsComponent } from './chords/chords.component';
import { ChordShapeSelectionComponent } from './chord-shape-selection/chord-shape-selection.component';
import { KeyComponent } from './chords/piano/key/key.component';
import { PianoComponent } from './chords/piano/piano.component';
import { SplitPipe } from './split.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };