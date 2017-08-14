import { PracticeAFirstProjectPage } from './app.po';

describe('practice-a-first-project App', () => {
  let page: PracticeAFirstProjectPage;

  beforeEach(() => {
    page = new PracticeAFirstProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
