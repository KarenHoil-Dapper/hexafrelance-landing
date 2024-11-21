import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPartnerComponent } from './your-partner.component';

describe('YourPartnerComponent', () => {
  let component: YourPartnerComponent;
  let fixture: ComponentFixture<YourPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
