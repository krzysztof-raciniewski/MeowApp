import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MeowFactsService } from './meowfacts/meow-facts.service';

@NgModule({
  providers: [MeowFactsService],
  imports: [CommonModule, HttpClientModule],
})
export class DataAccessModule {}
