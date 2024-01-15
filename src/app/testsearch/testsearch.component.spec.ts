import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsearchComponent } from './testsearch.component';

describe('TestsearchComponent', () => {
  let component: TestsearchComponent;
  let fixture: ComponentFixture<TestsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsearchComponent]
    });
    fixture = TestBed.createComponent(TestsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
