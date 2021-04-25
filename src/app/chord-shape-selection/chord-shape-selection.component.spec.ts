import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordShapeSelectionComponent } from './chord-shape-selection.component';

describe('ChordShapeSelectionComponent', () => {
  let component: ChordShapeSelectionComponent;
  let fixture: ComponentFixture<ChordShapeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordShapeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordShapeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
