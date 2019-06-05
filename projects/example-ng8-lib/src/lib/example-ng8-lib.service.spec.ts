import { TestBed } from '@angular/core/testing';

import { ExampleNg8LibService } from './example-ng8-lib.service';

describe('ExampleNg8LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleNg8LibService = TestBed.get(ExampleNg8LibService);
    expect(service).toBeTruthy();
  });
});
