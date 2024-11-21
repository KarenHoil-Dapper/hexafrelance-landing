import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueMoonHomeComponent } from './blue-moon-home.component';

describe('BlueMoonHomeComponent', () => {
  let component: BlueMoonHomeComponent;
  let fixture: ComponentFixture<BlueMoonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueMoonHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueMoonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
