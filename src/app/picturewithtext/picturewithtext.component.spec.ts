import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturewithtextComponent } from './picturewithtext.component';

describe('PicturewithtextComponent', () => {
  let component: PicturewithtextComponent;
  let fixture: ComponentFixture<PicturewithtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturewithtextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturewithtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
