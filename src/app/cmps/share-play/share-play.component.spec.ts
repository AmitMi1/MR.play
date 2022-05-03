import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePlayComponent } from './share-play.component';

describe('SharePlayComponent', () => {
  let component: SharePlayComponent;
  let fixture: ComponentFixture<SharePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
