import { PracticeECompDatabindProjectPage } from './app.po';

describe('practice-e-comp-databind-project App', () => {
  let page: PracticeECompDatabindProjectPage;

  beforeEach(() => {
    page = new PracticeECompDatabindProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
