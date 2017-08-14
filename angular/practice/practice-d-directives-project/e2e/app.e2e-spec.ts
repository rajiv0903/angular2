import { PracticeDDirectivesProjectPage } from './app.po';

describe('practice-d-directives-project App', () => {
  let page: PracticeDDirectivesProjectPage;

  beforeEach(() => {
    page = new PracticeDDirectivesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
