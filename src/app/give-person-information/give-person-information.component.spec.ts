import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivePersonInformationComponent } from './give-person-information.component';

describe('GivePersonInformationComponent', () => {
  let component: GivePersonInformationComponent;
  let fixture: ComponentFixture<GivePersonInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivePersonInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivePersonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
