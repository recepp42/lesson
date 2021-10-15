import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PicturewithtextComponent } from './picturewithtext/picturewithtext.component';
import { HeadtileComponent } from './headtile/headtile.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { SpecialtextTileComponent } from './specialtext-tile/specialtext-tile.component';
import { TimeComponent } from './time/time.component';
import { CounterComponent } from './counter/counter.component';
import { RandomGeneratorComponent } from './random-generator/random-generator.component';
import { HowMuchTimeComponent } from './how-much-time/how-much-time.component';
import { RandomScoreComponent } from './random-score/random-score.component';
import { LetseeAfternoonComponent } from './letsee-afternoon/letsee-afternoon.component';
import { TheWeatherComponent } from './the-weather/the-weather.component';
import { GivePersonInformationComponent } from './give-person-information/give-person-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarMenuComponent,
    TextcomponentComponent,
    ProgressbarComponent,
    PicturewithtextComponent,
    HeadtileComponent,
    FooterComponent,
    FormComponent,
    SpecialtextTileComponent,
    TimeComponent,
    CounterComponent,
    RandomGeneratorComponent,
    HowMuchTimeComponent,
    RandomScoreComponent,
    LetseeAfternoonComponent,
    TheWeatherComponent,
    GivePersonInformationComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
