import { PracticeIRouteGuardsProjectPage } from './app.po';

describe('practice-i-route-guards-project App', () => {
  let page: PracticeIRouteGuardsProjectPage;

  beforeEach(() => {
    page = new PracticeIRouteGuardsProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
