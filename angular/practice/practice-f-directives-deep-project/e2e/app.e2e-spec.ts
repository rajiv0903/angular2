import { PracticeFDirectivesDeepProjectPage } from './app.po';

describe('practice-f-directives-deep-project App', () => {
  let page: PracticeFDirectivesDeepProjectPage;

  beforeEach(() => {
    page = new PracticeFDirectivesDeepProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
