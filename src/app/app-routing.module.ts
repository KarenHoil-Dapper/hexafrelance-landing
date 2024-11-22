import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopmentComponent } from './pages/development/development.component';

const routes: Routes = [
  { path: 'lunaazulresidencial', component: DevelopmentComponent },
  { path: 'desarrollo', redirectTo: 'lunaazulresidencial', pathMatch: 'full' },
  { path: '**', redirectTo: 'lunaazulresidencial', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
