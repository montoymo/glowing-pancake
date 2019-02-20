import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app-translation.module';

import { ActivationsRoutingModule } from './activations-routing.module';
import { HistoricalComponent } from './historical/historical.component';
import { PendingComponent } from './pending/pending.component';
import { ActivationsComponent } from './activations.component';

@NgModule({
  declarations: [
    ActivationsComponent,
    HistoricalComponent,
    PendingComponent],
  imports: [
    CommonModule,
    ActivationsRoutingModule,
    AppTranslationModule,
  ]
})
export class ActivationsModule { }
