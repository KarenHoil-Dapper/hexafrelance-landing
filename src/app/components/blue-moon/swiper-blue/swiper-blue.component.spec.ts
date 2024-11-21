import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperBlueComponent } from './swiper-blue.component';

describe('SwiperBlueComponent', () => {
  let component: SwiperBlueComponent;
  let fixture: ComponentFixture<SwiperBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
