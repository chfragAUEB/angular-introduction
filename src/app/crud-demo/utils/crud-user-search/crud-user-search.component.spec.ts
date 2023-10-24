import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUserSearchComponent } from './crud-user-search.component';

describe('CrudUserSearchComponent', () => {
  let component: CrudUserSearchComponent;
  let fixture: ComponentFixture<CrudUserSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrudUserSearchComponent]
    });
    fixture = TestBed.createComponent(CrudUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
