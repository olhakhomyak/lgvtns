import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationMenuComponent } from './partials/navigation-menu/navigation-menu.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { BenefitsImagesComponent } from './main-page/benefits-images/benefits-images.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationMenuComponent,
    TranslatePipe,
    BenefitsImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
