import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPublisherManageComponent } from './admin-publisher-manage.component';

describe('AdminPublisherManageComponent', () => {
  let component: AdminPublisherManageComponent;
  let fixture: ComponentFixture<AdminPublisherManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPublisherManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPublisherManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
