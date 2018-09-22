import { MaterialPackageModule } from './material-package.module';

describe('MaterialPackageModule', () => {
  let materialPackageModule: MaterialPackageModule;

  beforeEach(() => {
    materialPackageModule = new MaterialPackageModule();
  });

  it('should create an instance', () => {
    expect(materialPackageModule).toBeTruthy();
  });
});
