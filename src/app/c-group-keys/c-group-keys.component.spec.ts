import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CGroupKeysComponent } from './c-group-keys.component';

describe('CGroupKeysComponent', () => {
  let component: CGroupKeysComponent;
  let fixture: ComponentFixture<CGroupKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CGroupKeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CGroupKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
