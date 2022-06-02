import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPublisherprofileComponent } from './dialog-publisherprofile.component';

describe('DialogPublisherprofileComponent', () => {
  let component: DialogPublisherprofileComponent;
  let fixture: ComponentFixture<DialogPublisherprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPublisherprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPublisherprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
