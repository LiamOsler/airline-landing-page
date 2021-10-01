import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalAreaComponent } from './promotional-area.component';

describe('PromotionalAreaComponent', () => {
  let component: PromotionalAreaComponent;
  let fixture: ComponentFixture<PromotionalAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
