import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtileComponent } from './headtile.component';

describe('HeadtileComponent', () => {
  let component: HeadtileComponent;
  let fixture: ComponentFixture<HeadtileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadtileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
