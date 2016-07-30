import { Demo0731Page } from './app.po';

describe('demo0731 App', function() {
  let page: Demo0731Page;

  beforeEach(() => {
    page = new Demo0731Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
