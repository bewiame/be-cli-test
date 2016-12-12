import { BeCliTestPage } from './app.po';

describe('be-cli-test App', function() {
  let page: BeCliTestPage;

  beforeEach(() => {
    page = new BeCliTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('be-cli-test works!');
  });
});
