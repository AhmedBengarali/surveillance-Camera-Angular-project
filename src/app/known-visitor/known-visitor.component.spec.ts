import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownVisitorComponent } from './known-visitor.component';

describe('KnownVisitorComponent', () => {
  let component: KnownVisitorComponent;
  let fixture: ComponentFixture<KnownVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnownVisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
