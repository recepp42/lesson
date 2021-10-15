import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowMuchTimeComponent } from './how-much-time.component';

describe('HowMuchTimeComponent', () => {
  let component: HowMuchTimeComponent;
  let fixture: ComponentFixture<HowMuchTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowMuchTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowMuchTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
