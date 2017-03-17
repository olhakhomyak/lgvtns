import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { TranslateService } from '../translate/translate.service';

@Injectable()
export class MainContentService {

  private _newsSrc: string = '../../assets/content/home-page/image-blocks-en.json';


  constructor(private _http:Http, private  _translate: TranslateService) { }

  getData() {
    return this._http.get(this._newsSrc)
      .map((response:Response) => response.json());
  };

  getCurrentLang() {
    console.log (this._translate.currentLang);
  }

}
