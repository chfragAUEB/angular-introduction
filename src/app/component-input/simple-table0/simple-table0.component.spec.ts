import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTable0Component } from './simple-table0.component';

describe('SimpleTable0Component', () => {
  let component: SimpleTable0Component;
  let fixture: ComponentFixture<SimpleTable0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTable0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTable0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
