import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponent2Component } from './shared-component2.component';

describe('SharedComponent2Component', () => {
  let component: SharedComponent2Component;
  let fixture: ComponentFixture<SharedComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedComponent2Component]
    });
    fixture = TestBed.createComponent(SharedComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
