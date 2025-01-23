import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrattoriaComponent } from './trattoria.component';

describe('TrattoriaComponent', () => {
  let component: TrattoriaComponent;
  let fixture: ComponentFixture<TrattoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrattoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrattoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
