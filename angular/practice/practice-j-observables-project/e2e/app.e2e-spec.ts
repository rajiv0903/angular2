import { PracticeJObservablesProjectPage } from './app.po';

describe('practice-j-observables-project App', () => {
  let page: PracticeJObservablesProjectPage;

  beforeEach(() => {
    page = new PracticeJObservablesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
