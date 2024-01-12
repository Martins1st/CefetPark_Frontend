import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoListarComponent } from './convidado-listar.component';

describe('ConvidadoListarComponent', () => {
  let component: ConvidadoListarComponent;
  let fixture: ComponentFixture<ConvidadoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvidadoListarComponent]
    });
    fixture = TestBed.createComponent(ConvidadoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
