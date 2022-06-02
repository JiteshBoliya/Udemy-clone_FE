import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherSalesComponent } from './publisher-sales.component';

describe('PublisherSalesComponent', () => {
  let component: PublisherSalesComponent;
  let fixture: ComponentFixture<PublisherSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
