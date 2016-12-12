export class BeCliTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('be-cli-test-app h1')).getText();
  }
}
