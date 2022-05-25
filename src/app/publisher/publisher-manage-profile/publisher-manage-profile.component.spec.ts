import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherManageProfileComponent } from './publisher-manage-profile.component';

describe('PublisherManageProfileComponent', () => {
  let component: PublisherManageProfileComponent;
  let fixture: ComponentFixture<PublisherManageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherManageProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherManageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
