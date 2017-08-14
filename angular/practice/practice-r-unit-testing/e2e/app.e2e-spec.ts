import { PracticeRUnitTestingPage } from './app.po';

describe('practice-r-unit-testing App', () => {
  let page: PracticeRUnitTestingPage;

  beforeEach(() => {
    page = new PracticeRUnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
