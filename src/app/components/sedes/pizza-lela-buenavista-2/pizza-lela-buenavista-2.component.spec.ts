import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaLelaBuenavista2Component } from './pizza-lela-buenavista-2.component';

describe('PizzaLelaBuenavista2Component', () => {
  let component: PizzaLelaBuenavista2Component;
  let fixture: ComponentFixture<PizzaLelaBuenavista2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaLelaBuenavista2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaLelaBuenavista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
