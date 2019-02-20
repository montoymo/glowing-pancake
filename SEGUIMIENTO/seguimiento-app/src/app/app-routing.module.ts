import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/main/home/home.component';
import { ParalelComponent } from './components/paralel/paralel.component';

const ROUTES: Routes = [
  {path: 'paralelo', component: ParalelComponent},
  {
    path: 'paralel',
    loadChildren: './components/paralel/paralel.module#ParalelModule'
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: './components/main/home/home.module#HomeModule'
  },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],  // { enableTracing: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }

