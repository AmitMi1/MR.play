import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayReviewComponent } from './play-review.component';

describe('PlayReviewComponent', () => {
  let component: PlayReviewComponent;
  let fixture: ComponentFixture<PlayReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
