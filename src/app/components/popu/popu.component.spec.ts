import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuComponent } from './popu.component';

describe('PopuComponent', () => {
  let component: PopuComponent;
  let fixture: ComponentFixture<PopuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
