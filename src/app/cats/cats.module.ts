import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactsListComponent } from './facts-list/facts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'facts' },

  {
    path: 'facts',
    component: FactsListComponent,
  },
];

@NgModule({
  declarations: [FactsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CatsModule {}
