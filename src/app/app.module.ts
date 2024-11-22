import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhyWeComponent } from './components/home/why-we/why-we.component';
import { OurProjectsComponent } from './components/home/our-projects/our-projects.component';
import { YourPartnerComponent } from './components/home/your-partner/your-partner.component';
import { BannerHomeComponent } from './components/home/banner-home/banner-home.component';
import { BlueMoonHomeComponent } from './components/home/blue-moon-home/blue-moon-home.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { WhatAndHowAboutComponent } from './components/about-us/what-and-how-about/what-and-how-about.component';
import { WhatAndHowInvestmentComponent } from './components/investment/what-and-how-investment/what-and-how-investment.component';
import { InformationInvestmentComponent } from './components/investment/information-investment/information-investment.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { BannerBlueComponent } from './components/blue-moon/banner-blue/banner-blue.component';
import { SwiperBlueComponent } from './components/blue-moon/swiper-blue/swiper-blue.component';
import { InformationBlueComponent } from './components/blue-moon/information-blue/information-blue.component';
import { WhyBlueMoonComponent } from './components/blue-moon/why-blue-moon/why-blue-moon.component';
import { BlueMoonDedicatedComponent } from './components/blue-moon/blue-moon-dedicated/blue-moon-dedicated.component';
import { CharacteristicsBlueComponent } from './components/blue-moon/characteristics-blue/characteristics-blue.component';
import { TestimonialsHomeComponent } from './components/home/testimonials-home/testimonials-home.component';
import { BannersComponent } from './components/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    NavBarComponent,
    FooterComponent,
    WhyWeComponent,
    OurProjectsComponent,
    YourPartnerComponent,
    BannerHomeComponent,
    BlueMoonHomeComponent,
    SecondSectionComponent,
    WhatAndHowAboutComponent,
    WhatAndHowInvestmentComponent,
    InformationInvestmentComponent,
    DevelopmentComponent,
    BannerBlueComponent,
    SwiperBlueComponent,
    InformationBlueComponent,
    WhyBlueMoonComponent,
    BlueMoonDedicatedComponent,
    CharacteristicsBlueComponent,
    TestimonialsHomeComponent,
    BannersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
