import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { TranslateService } from '../translate/translate.service';

@Injectable()
export class MainContentService {

  private _currentLang: string;
  private _newsSrc: string;

  public get currentLang() {
   return  this._newsSrc = '../../assets/content/home-page/image-blocks-' + this._currentLang + '.json';
  }
  constructor(private _http:Http, private  _translate: TranslateService) { }

   public use(lang: string): void {
    this._currentLang = lang;
  }

  getData() {
    return this._http.get(this._newsSrc)
      .map((response:Response) => response.json());
  };
}
