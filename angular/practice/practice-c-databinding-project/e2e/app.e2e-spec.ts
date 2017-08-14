import { PracticeCDatabindingProjectPage } from './app.po';

describe('practice-c-databinding-project App', () => {
  let page: PracticeCDatabindingProjectPage;

  beforeEach(() => {
    page = new PracticeCDatabindingProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
