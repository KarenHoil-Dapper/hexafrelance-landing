import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationBlueComponent } from './information-blue.component';

describe('InformationBlueComponent', () => {
  let component: InformationBlueComponent;
  let fixture: ComponentFixture<InformationBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
