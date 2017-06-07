import { CadastrosConsumerPage } from './app.po';

describe('cadastros-consumer App', () => {
  let page: CadastrosConsumerPage;

  beforeEach(() => {
    page = new CadastrosConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
