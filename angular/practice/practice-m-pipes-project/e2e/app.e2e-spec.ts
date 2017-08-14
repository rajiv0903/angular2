import { PracticeMPipesProjectPage } from './app.po';

describe('practice-m-pipes-project App', () => {
  let page: PracticeMPipesProjectPage;

  beforeEach(() => {
    page = new PracticeMPipesProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
