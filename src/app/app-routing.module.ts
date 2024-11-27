import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './pages/development/development.component';

const routes: Routes = [
  { path: 'hexafrelance', component: DevelopmentComponent },
  { path: 'desarrollo', redirectTo: 'hexafrelance', pathMatch: 'full' },
  { path: '**', redirectTo: 'hexafrelance', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
