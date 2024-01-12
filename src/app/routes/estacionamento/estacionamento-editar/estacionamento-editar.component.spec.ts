import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamentoEditarComponent } from './estacionamento-editar.component';

describe('EstacionamentoEditarComponent', () => {
  let component: EstacionamentoEditarComponent;
  let fixture: ComponentFixture<EstacionamentoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionamentoEditarComponent]
    });
    fixture = TestBed.createComponent(EstacionamentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
