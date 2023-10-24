import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerAreYouSureComponent } from './danger-are-you-sure.component';

describe('DangerAreYouSureComponent', () => {
  let component: DangerAreYouSureComponent;
  let fixture: ComponentFixture<DangerAreYouSureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DangerAreYouSureComponent]
    });
    fixture = TestBed.createComponent(DangerAreYouSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
