import { Component, OnInit } from '@angular/core';

import { MainContentService } from '../main-page/main-content.service';
import { TranslateService } from '../translate';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html'
})
export class NavigationMenuComponent implements OnInit{

  public supportedLanguages: any[];

  constructor(private _translate: TranslateService, private _mainContent: MainContentService) { }

  ngOnInit() {
    this.supportedLanguages = [
      { display: 'english', value: 'en' },
      { display: 'deutsch', value: 'de' },
    ];

    this.selectLang('en');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    this._translate.use(lang);
    this._mainContent.use(lang);
  }
}
