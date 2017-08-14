import { PracticeGServiceProjectPage } from './app.po';

describe('practice-g-service-project App', () => {
  let page: PracticeGServiceProjectPage;

  beforeEach(() => {
    page = new PracticeGServiceProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
