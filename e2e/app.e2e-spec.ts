import { LogivationsPage } from './app.po';

describe('logivations App', () => {
  let page: LogivationsPage;

  beforeEach(() => {
    page = new LogivationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
