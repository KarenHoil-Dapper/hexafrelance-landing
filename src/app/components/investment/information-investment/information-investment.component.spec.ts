import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationInvestmentComponent } from './information-investment.component';

describe('InformationInvestmentComponent', () => {
  let component: InformationInvestmentComponent;
  let fixture: ComponentFixture<InformationInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
