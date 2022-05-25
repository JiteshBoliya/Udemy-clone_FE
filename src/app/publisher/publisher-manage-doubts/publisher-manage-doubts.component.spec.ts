import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManageDoubtsComponent } from './publisher-manage-doubts.component';

describe('PublisherManageDoubtsComponent', () => {
  let component: PublisherManageDoubtsComponent;
  let fixture: ComponentFixture<PublisherManageDoubtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManageDoubtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManageDoubtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
