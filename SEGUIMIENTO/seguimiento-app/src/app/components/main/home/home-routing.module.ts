import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ActivationsComponent } from '../../activations/activations.component';

const ROUTES: Routes = [
    {
        path: 'activations',
        // component: ActivationsComponent,
        loadChildren: '../../activations/activations.module#ActivationsModule'
    }
];


@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
