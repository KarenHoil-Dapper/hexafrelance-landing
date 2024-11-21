import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAndHowInvestmentComponent } from './what-and-how-investment.component';

describe('WhatAndHowInvestmentComponent', () => {
  let component: WhatAndHowInvestmentComponent;
  let fixture: ComponentFixture<WhatAndHowInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatAndHowInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAndHowInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
