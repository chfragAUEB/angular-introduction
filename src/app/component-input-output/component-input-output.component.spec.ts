import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputOutputComponent } from './component-input-output.component';

describe('ComponentInputOutputComponent', () => {
  let component: ComponentInputOutputComponent;
  let fixture: ComponentFixture<ComponentInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInputOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
