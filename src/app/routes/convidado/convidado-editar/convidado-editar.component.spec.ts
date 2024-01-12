import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoEditarComponent } from './convidado-editar.component';

describe('ConvidadoEditarComponent', () => {
  let component: ConvidadoEditarComponent;
  let fixture: ComponentFixture<ConvidadoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvidadoEditarComponent]
    });
    fixture = TestBed.createComponent(ConvidadoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
