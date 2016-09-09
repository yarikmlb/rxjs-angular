import { RxjsAngularPage } from './app.po';

describe('rxjs-angular App', function() {
  let page: RxjsAngularPage;

  beforeEach(() => {
    page = new RxjsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
