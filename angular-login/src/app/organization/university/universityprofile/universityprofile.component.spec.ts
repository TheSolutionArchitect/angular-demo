import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityprofileComponent } from './universityprofile.component';

describe('UniversityprofileComponent', () => {
  let component: UniversityprofileComponent;
  let fixture: ComponentFixture<UniversityprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
