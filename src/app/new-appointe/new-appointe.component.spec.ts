import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointeComponent } from './new-appointe.component';

describe('NewAppointeComponent', () => {
  let component: NewAppointeComponent;
  let fixture: ComponentFixture<NewAppointeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAppointeComponent]
    });
    fixture = TestBed.createComponent(NewAppointeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
