import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUserFormComponent } from './crud-user-form.component';

describe('CrudUserFormComponent', () => {
  let component: CrudUserFormComponent;
  let fixture: ComponentFixture<CrudUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrudUserFormComponent]
    });
    fixture = TestBed.createComponent(CrudUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
