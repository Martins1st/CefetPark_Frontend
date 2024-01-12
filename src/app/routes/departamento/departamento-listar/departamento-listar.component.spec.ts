import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoListarComponent } from './departamento-listar.component';

describe('DepartamentoListarComponent', () => {
  let component: DepartamentoListarComponent;
  let fixture: ComponentFixture<DepartamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoListarComponent]
    });
    fixture = TestBed.createComponent(DepartamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
