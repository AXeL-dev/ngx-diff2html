import { TestBed } from '@angular/core/testing';

import { NgxDiff2htmlService } from './ngx-diff2html.service';

describe('NgxDiff2htmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDiff2htmlService = TestBed.get(NgxDiff2htmlService);
    expect(service).toBeTruthy();
  });
});
