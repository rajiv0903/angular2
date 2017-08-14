import { PracticeNHttpRequestProjectPage } from './app.po';

describe('practice-n-http-request-project App', () => {
  let page: PracticeNHttpRequestProjectPage;

  beforeEach(() => {
    page = new PracticeNHttpRequestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
