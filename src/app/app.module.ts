import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CompetencesComponent } from './competences/competences.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { FormationsComponent } from './formations/formations.component';
import { LanguesComponent } from './langues/langues.component';
import { InteretsComponent } from './interets/interets.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CompetencesComponent,
    ExperiencesComponent,
    CertificationsComponent,
    FormationsComponent,
    LanguesComponent,
    InteretsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
