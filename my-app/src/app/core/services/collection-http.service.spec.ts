import { TestBed, inject } from '@angular/core/testing';

import { CollectionHttpService } from './collection-http.service';

describe('CollectionHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionHttpService]
    });
  });

  it('should be created', inject([CollectionHttpService], (service: CollectionHttpService) => {
    expect(service).toBeTruthy();
  }));
});
