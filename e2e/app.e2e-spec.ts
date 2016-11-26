import { IsAppPage } from './app.po';

describe('is-app App', function() {
  let page: IsAppPage;

  beforeEach(() => {
    page = new IsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
