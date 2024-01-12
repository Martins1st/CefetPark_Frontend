import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamentoListarComponent } from './estacionamento-listar.component';

describe('EstacionamentoListarComponent', () => {
  let component: EstacionamentoListarComponent;
  let fixture: ComponentFixture<EstacionamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionamentoListarComponent]
    });
    fixture = TestBed.createComponent(EstacionamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
