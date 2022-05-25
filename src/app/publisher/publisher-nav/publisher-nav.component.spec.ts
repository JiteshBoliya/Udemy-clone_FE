import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherNavComponent } from './publisher-nav.component';

describe('PublisherNavComponent', () => {
  let component: PublisherNavComponent;
  let fixture: ComponentFixture<PublisherNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
