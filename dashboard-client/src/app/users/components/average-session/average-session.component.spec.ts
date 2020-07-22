import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSessionComponent } from './average-session.component';

describe('AverageSessionComponent', () => {
  let component: AverageSessionComponent;
  let fixture: ComponentFixture<AverageSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
