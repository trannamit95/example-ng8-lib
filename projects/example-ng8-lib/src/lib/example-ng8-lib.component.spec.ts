import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNg8LibComponent } from './example-ng8-lib.component';

describe('ExampleNg8LibComponent', () => {
  let component: ExampleNg8LibComponent;
  let fixture: ComponentFixture<ExampleNg8LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNg8LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNg8LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
