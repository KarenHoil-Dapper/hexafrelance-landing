import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBlueComponent } from './banner-blue.component';

describe('BannerBlueComponent', () => {
  let component: BannerBlueComponent;
  let fixture: ComponentFixture<BannerBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
