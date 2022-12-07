import { TestBed, inject } from "@angular/core/testing";

import { NgxDiff2htmlService } from "./ngx-diff2html.service";

describe("NgxDiff2htmlService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxDiff2htmlService],
    });
  });

  it("should be created", inject(
    [NgxDiff2htmlService],
    (service: NgxDiff2htmlService) => {
      expect(service).toBeTruthy();
    }
  ));
});
