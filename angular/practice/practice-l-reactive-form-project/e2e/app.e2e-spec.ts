import { PracticeLReactiveFormProjectPage } from './app.po';

describe('practice-l-reactive-form-project App', () => {
  let page: PracticeLReactiveFormProjectPage;

  beforeEach(() => {
    page = new PracticeLReactiveFormProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
