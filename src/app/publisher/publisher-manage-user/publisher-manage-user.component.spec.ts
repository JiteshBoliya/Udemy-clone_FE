import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManageUserComponent } from './publisher-manage-user.component';

describe('PublisherManageUserComponent', () => {
  let component: PublisherManageUserComponent;
  let fixture: ComponentFixture<PublisherManageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
