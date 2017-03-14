import { Component, OnInit } from '@angular/core';
import { MainContentService } from './main-content.service';

@Component({
  selector: 'news-block',
  template: `
    <p *ngFor="let item of news" class="col-md-6" style="background-color: #4f5b69">
      {{item.title}}
    </p>
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
