import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDiff2htmlComponent } from './ngx-diff2html.component';

describe('NgxDiff2htmlComponent', () => {
  let component: NgxDiff2htmlComponent;
  let fixture: ComponentFixture<NgxDiff2htmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDiff2htmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDiff2htmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
