import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingComponent } from './pending/pending.component';
import { HistoricalComponent } from './historical/historical.component';
import { ActivationsComponent } from './activations.component';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pending',
        component: PendingComponent
      },
      {
        path: 'historical',
        component: HistoricalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ActivationsRoutingModule { }
