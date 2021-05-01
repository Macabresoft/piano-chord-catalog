import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSkullComponent } from './big-skull.component';

describe('BigSkullComponent', () => {
  let component: BigSkullComponent;
  let fixture: ComponentFixture<BigSkullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigSkullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSkullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
