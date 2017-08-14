import { PracticeOAuthenticationProjectPage } from './app.po';

describe('practice-o-authentication-project App', () => {
  let page: PracticeOAuthenticationProjectPage;

  beforeEach(() => {
    page = new PracticeOAuthenticationProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
