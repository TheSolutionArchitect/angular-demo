import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationreviewComponent } from './applicationreview.component';

describe('ApplicationreviewComponent', () => {
  let component: ApplicationreviewComponent;
  let fixture: ComponentFixture<ApplicationreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
