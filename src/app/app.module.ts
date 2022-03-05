import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './base/home/home.component';
import { PanelHomeComponent } from './base/panel-home/panel-home.component';
import { CarousselHomeComponent } from './base/caroussel/panel-home.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FooterComponent } from './base/footer/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanelHomeComponent,
    CarousselHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCarouselModule,
    MatCarouselModule.forRoot(),
    MatButtonModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
