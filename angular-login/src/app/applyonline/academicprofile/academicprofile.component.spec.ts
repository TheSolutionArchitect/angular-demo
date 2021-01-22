import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicprofileComponent } from './academicprofile.component';

describe('AcademicprofileComponent', () => {
  let component: AcademicprofileComponent;
  let fixture: ComponentFixture<AcademicprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
