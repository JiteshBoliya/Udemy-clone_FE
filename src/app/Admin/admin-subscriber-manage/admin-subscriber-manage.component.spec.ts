import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriberManageComponent } from './admin-subscriber-manage.component';

describe('AdminSubscriberManageComponent', () => {
  let component: AdminSubscriberManageComponent;
  let fixture: ComponentFixture<AdminSubscriberManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubscriberManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubscriberManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
