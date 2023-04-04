import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTable1Component } from './simple-table1.component';

describe('SimpleTable1Component', () => {
  let component: SimpleTable1Component;
  let fixture: ComponentFixture<SimpleTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleTable1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
