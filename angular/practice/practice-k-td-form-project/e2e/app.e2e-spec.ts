import { PracticeKTdFormProjectPage } from './app.po';

describe('practice-k-td-form-project App', () => {
  let page: PracticeKTdFormProjectPage;

  beforeEach(() => {
    page = new PracticeKTdFormProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
