import { CRUDModule } from './crud.module';

describe('CrudModule', () => {
  let crudModule: CRUDModule;

  beforeEach(() => {
    crudModule = new CRUDModule();
  });

  it('should create an instance', () => {
    expect(crudModule).toBeTruthy();
  });
});
