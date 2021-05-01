import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigSkullComponent } from './big-skull/big-skull.component';
import { ChordsComponent } from './chords/chords.component';

const routes: Routes = [
  { path: '',   redirectTo: '/major', pathMatch: 'full' },
  { path: 'big-skull', component: BigSkullComponent},
  { path: ':chord-shape', component: ChordsComponent },
  { path: '**', redirectTo: '/major', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
