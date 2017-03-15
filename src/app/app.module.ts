import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { NewsBlockComponent } from './main-page/news-block.component';
import {MainContentService} from "./main-page/main-content.service";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationMenuComponent,
    TranslatePipe,
    NewsBlockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TRANSLATION_PROVIDERS, TranslateService, MainContentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
