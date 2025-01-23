import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaLelaCaimanDelRioComponent } from './pizza-lela-caiman-del-rio.component';

describe('PizzaLelaCaimanDelRioComponent', () => {
  let component: PizzaLelaCaimanDelRioComponent;
  let fixture: ComponentFixture<PizzaLelaCaimanDelRioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaLelaCaimanDelRioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaLelaCaimanDelRioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
