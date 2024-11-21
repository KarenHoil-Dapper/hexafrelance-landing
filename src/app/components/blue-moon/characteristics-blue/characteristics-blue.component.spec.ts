import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsBlueComponent } from './characteristics-blue.component';

describe('CharacteristicsBlueComponent', () => {
  let component: CharacteristicsBlueComponent;
  let fixture: ComponentFixture<CharacteristicsBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicsBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacteristicsBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
