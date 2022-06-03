import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherRatingComponent } from './publisher-rating.component';

describe('PublisherRatingComponent', () => {
  let component: PublisherRatingComponent;
  let fixture: ComponentFixture<PublisherRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
