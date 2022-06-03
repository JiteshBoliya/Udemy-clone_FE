import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManageTutorialComponent } from './publisher-manage-tutorial.component';

describe('PublisherManageTutorialComponent', () => {
  let component: PublisherManageTutorialComponent;
  let fixture: ComponentFixture<PublisherManageTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManageTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManageTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
