import { TestBed } from '@angular/core/testing';

import { Github.ServiceService } from './github.service.service';

describe('Github.ServiceService', () => {
  let service: Github.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Github.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
