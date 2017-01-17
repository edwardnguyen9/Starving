import { StarvingPage } from './app.po';

describe('starving App', function() {
  let page: StarvingPage;

  beforeEach(() => {
    page = new StarvingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
