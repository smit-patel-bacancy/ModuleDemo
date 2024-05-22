import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExampleComponent } from './component-example.component';

describe('ComponentExampleComponent', () => {
  let component: ComponentExampleComponent;
  let fixture: ComponentFixture<ComponentExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentExampleComponent]
    });
    fixture = TestBed.createComponent(ComponentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
