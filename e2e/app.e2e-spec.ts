import { FoostatsPage } from './app.po';

describe('foostats App', () => {
  let page: FoostatsPage;

  beforeEach(() => {
    page = new FoostatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
