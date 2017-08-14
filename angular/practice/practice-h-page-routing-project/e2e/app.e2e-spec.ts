import { PracticeHPageRoutingProjectPage } from './app.po';

describe('practice-h-page-routing-project App', () => {
  let page: PracticeHPageRoutingProjectPage;

  beforeEach(() => {
    page = new PracticeHPageRoutingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
