import { PracticeBComponentProjectPage } from './app.po';

describe('practice-b-component-project App', () => {
  let page: PracticeBComponentProjectPage;

  beforeEach(() => {
    page = new PracticeBComponentProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
