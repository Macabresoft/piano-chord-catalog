import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordsComponent } from './chords/chords.component';

const routes: Routes = [
  { path: ':chord-shape', component: ChordsComponent },
  { path: '',   redirectTo: '/major', pathMatch: 'full' },
  { path: '**', redirectTo: '/major', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
