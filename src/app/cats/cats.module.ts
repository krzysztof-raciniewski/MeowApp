import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataAccessModule } from '../data-access/data-access.module';
import { FactEntryComponent } from './facts-list/fact-entry/fact-entry.component';
import { FactsListComponent } from './facts-list/facts-list.component';
import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './facts-list/spinner/spinner.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'facts' },
  {
    path: 'facts',
    component: FactsListComponent,
  },
];

@NgModule({
  declarations: [FactsListComponent, FactEntryComponent, HeaderComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), DataAccessModule],
})
export class CatsModule {}
