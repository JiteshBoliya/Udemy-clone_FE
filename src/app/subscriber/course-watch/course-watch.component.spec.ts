import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWatchComponent } from './course-watch.component';

describe('CourseWatchComponent', () => {
  let component: CourseWatchComponent;
  let fixture: ComponentFixture<CourseWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
