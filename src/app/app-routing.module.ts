import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { InvestmentComponent } from './pages/investment/investment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  // { path: 'desarrollo', component: DevelopmentComponent },
  { path: 'lunaazulresidencial', component: DevelopmentComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'inversion', component: InvestmentComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'gracias', component: ThankYouPageComponent },
  { path: 'desarrollo', redirectTo: 'lunaazulresidencial', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
