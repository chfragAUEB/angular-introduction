import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputComponent } from './component-input.component';

describe('ComponentInputComponent', () => {
  let component: ComponentInputComponent;
  let fixture: ComponentFixture<ComponentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
