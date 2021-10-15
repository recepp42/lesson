import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtextTileComponent } from './specialtext-tile.component';

describe('SpecialtextTileComponent', () => {
  let component: SpecialtextTileComponent;
  let fixture: ComponentFixture<SpecialtextTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtextTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtextTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
