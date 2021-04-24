import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { MajorChordsComponent } from './major-chords/major-chords.component'
import { MinorChordsComponent } from './minor-chords/minor-chords.component'

const routes: Routes = [
  { path: 'major', component: MajorChordsComponent },
  { path: 'minor', component: MinorChordsComponent },
  { path: '',   redirectTo: '/major', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
