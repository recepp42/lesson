import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetseeAfternoonComponent } from './letsee-afternoon.component';

describe('LetseeAfternoonComponent', () => {
  let component: LetseeAfternoonComponent;
  let fixture: ComponentFixture<LetseeAfternoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetseeAfternoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetseeAfternoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
