import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAndHowAboutComponent } from './what-and-how-about.component';

describe('WhatAndHowAboutComponent', () => {
  let component: WhatAndHowAboutComponent;
  let fixture: ComponentFixture<WhatAndHowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatAndHowAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatAndHowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
