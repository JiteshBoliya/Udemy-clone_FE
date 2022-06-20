import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCourseViewComponent } from './dialog-course-view.component';

describe('DialogCourseViewComponent', () => {
  let component: DialogCourseViewComponent;
  let fixture: ComponentFixture<DialogCourseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCourseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
