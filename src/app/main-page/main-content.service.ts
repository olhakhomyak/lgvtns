import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class MainContentService {

  private _newsSrc: string = '../../assets/content/home-page/image-blocks.json';

  constructor(private _http:Http) { }

  getData() {
    return this._http.get(this._newsSrc)
      .map((response:Response) => response.json());
  }

}
