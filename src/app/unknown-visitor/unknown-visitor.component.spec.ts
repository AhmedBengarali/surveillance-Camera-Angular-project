import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownVisitorComponent } from './unknown-visitor.component';

describe('UnknownVisitorComponent', () => {
  let component: UnknownVisitorComponent;
  let fixture: ComponentFixture<UnknownVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnknownVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
