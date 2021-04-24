import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorChordsComponent } from './minor-chords.component';

describe('MinorChordsComponent', () => {
  let component: MinorChordsComponent;
  let fixture: ComponentFixture<MinorChordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinorChordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinorChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
