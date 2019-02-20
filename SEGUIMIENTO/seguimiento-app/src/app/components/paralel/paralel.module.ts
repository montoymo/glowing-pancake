import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ParalelRoutingModule } from './paralel-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParalelRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class ParalelModule { }
