import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMoonDedicatedComponent } from './blue-moon-dedicated.component';

describe('BlueMoonDedicatedComponent', () => {
  let component: BlueMoonDedicatedComponent;
  let fixture: ComponentFixture<BlueMoonDedicatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueMoonDedicatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueMoonDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
