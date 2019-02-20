import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../../app-translation.module';
import { HomeRoutingModule } from './home-routing.module';
import { ActivationsModule } from '../../activations/activations.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ActivationsModule,
    AppTranslationModule,
  ]
})
export class HomeModule { }
