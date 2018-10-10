import { IgniteUiModule } from './ignite-ui.module';

describe('IgniteUiModule', () => {
  let igniteUiModule: IgniteUiModule;

  beforeEach(() => {
    igniteUiModule = new IgniteUiModule();
  });

  it('should create an instance', () => {
    expect(igniteUiModule).toBeTruthy();
  });
});
