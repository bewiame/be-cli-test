import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BeCliTestAppComponent } from '../app/be-cli-test.component';

beforeEachProviders(() => [BeCliTestAppComponent]);

describe('App: BeCliTest', () => {
  it('should create the app',
      inject([BeCliTestAppComponent], (app: BeCliTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'be-cli-test works!\'',
      inject([BeCliTestAppComponent], (app: BeCliTestAppComponent) => {
    expect(app.title).toEqual('be-cli-test works!');
  }));
});
