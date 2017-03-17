import { Component, OnInit } from '@angular/core';
import { MainContentService } from '../main-content.service';
import { TranslateService } from '../../translate';

@Component({
  selector: 'news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.styles.scss']
})
export class NewsBlockComponent implements OnInit {
  news = [];

  constructor(private _mainContentService: MainContentService) {}

  ngOnInit() {
    this._mainContentService.getData()
      .subscribe(response => this.news = response);
  }

}
