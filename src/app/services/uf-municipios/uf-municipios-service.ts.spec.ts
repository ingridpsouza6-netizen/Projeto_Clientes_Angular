import { TestBed } from '@angular/core/testing';

import { UfMunicipiosServiceTs } from './uf-municipios-service.ts';

describe('UfMunicipiosServiceTs', () => {
  let service: UfMunicipiosServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfMunicipiosServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
