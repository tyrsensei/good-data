export class GoodDataPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('good-data-app h1')).getText();
  }
}
