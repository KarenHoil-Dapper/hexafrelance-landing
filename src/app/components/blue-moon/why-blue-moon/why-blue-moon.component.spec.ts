import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBlueMoonComponent } from './why-blue-moon.component';

describe('WhyBlueMoonComponent', () => {
  let component: WhyBlueMoonComponent;
  let fixture: ComponentFixture<WhyBlueMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyBlueMoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBlueMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
