import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetInTouchManageComponent } from './admin-get-in-touch-manage.component';

describe('AdminGetInTouchManageComponent', () => {
  let component: AdminGetInTouchManageComponent;
  let fixture: ComponentFixture<AdminGetInTouchManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetInTouchManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetInTouchManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
