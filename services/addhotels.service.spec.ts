import { TestBed } from '@angular/core/testing';

import { AddhotelsService } from './addhotels.service';

describe('AddhotelsService', () => {
  let service: AddhotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
