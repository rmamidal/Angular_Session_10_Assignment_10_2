import { FormAppPage } from './app.po';

describe('form-app App', () => {
  let page: FormAppPage;

  beforeEach(() => {
    page = new FormAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
