import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationsComponent } from './new-registrations.component';

describe('NewRegistrationsComponent', () => {
  let component: NewRegistrationsComponent;
  let fixture: ComponentFixture<NewRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
