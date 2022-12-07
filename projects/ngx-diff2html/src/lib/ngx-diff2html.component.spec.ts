import { ComponentFixture, TestBed, async } from "@angular/core/testing";

import { NgxDiff2htmlComponent } from "./ngx-diff2html.component";
import { SafePipe } from "../pipes/safe.pipe";

describe("NgxDiff2htmlComponent", () => {
  let component: NgxDiff2htmlComponent;
  let fixture: ComponentFixture<NgxDiff2htmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDiff2htmlComponent, SafePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxDiff2htmlComponent);
    component = fixture.componentInstance;
    component.left = "test";
    component.right = "test2";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
