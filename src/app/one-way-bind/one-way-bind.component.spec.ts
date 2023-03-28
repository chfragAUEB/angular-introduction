import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBindComponent } from './one-way-bind.component';

describe('OneWayBindComponent', () => {
  let component: OneWayBindComponent;
  let fixture: ComponentFixture<OneWayBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWayBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
