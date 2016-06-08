import { GoodDataPage } from './app.po';

describe('good-data App', function() {
  let page: GoodDataPage;

  beforeEach(() => {
    page = new GoodDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('good-data works!');
  });
});
