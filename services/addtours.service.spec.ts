import { TestBed } from '@angular/core/testing';

import { AddtoursService } from './addtours.service';

describe('AddtoursService', () => {
  let service: AddtoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
