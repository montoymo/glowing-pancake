import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParalelComponent } from './paralel.component';

const ROUTES: Routes = [
    { path: 'paralel', component: ParalelComponent }
   // { path: 'paralel', component: ParalelComponent },
    //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ParalelRoutingModule {}
