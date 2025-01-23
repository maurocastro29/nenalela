import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasSedesComponent } from './nuestras-sedes.component';

describe('NuestrasSedesComponent', () => {
  let component: NuestrasSedesComponent;
  let fixture: ComponentFixture<NuestrasSedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrasSedesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrasSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
