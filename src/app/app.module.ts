import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CardsRowComponent } from './cards-row/cards-row.component';
import { CardComponent } from './card/card.component';
import { SliderComponent } from './slider/slider.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    NewsletterComponent,
    CardsRowComponent,
    CardComponent,
    SliderComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
