import { Component, OnInit } from '@angular/core';
import { MainContentService } from './main-content.service';

@Component({
  selector: 'news-block',
  template: `
  <div class="row">
        <div *ngFor="let item of news" class="col-md-6 no-padding" style="height: 33.3vh" >
            <img class="img-responsive" [src]="item.imgSrc" style="height: 100%; width: 100%">
        </div>
      </div>
  `
})
export class NewsBlockComponent implements OnInit {
  news = [];

  constructor(private _mainContentService: MainContentService) {}

  ngOnInit() {
    this._mainContentService.getData()
      .subscribe(response => this.news = response);
  }

}
