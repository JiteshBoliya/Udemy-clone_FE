import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManageCourseComponent } from './publisher-manage-course.component';

describe('PublisherManageCourseComponent', () => {
  let component: PublisherManageCourseComponent;
  let fixture: ComponentFixture<PublisherManageCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManageCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
