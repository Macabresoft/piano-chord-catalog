import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorChordsComponent } from './major-chords.component';

describe('MajorChordsComponent', () => {
  let component: MajorChordsComponent;
  let fixture: ComponentFixture<MajorChordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorChordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorChordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
