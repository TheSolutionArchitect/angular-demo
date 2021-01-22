import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionprofileComponent } from './institutionprofile.component';

describe('InstitutionprofileComponent', () => {
  let component: InstitutionprofileComponent;
  let fixture: ComponentFixture<InstitutionprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
