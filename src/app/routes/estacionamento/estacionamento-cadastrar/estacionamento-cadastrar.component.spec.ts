import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamentoCadastrarComponent } from './estacionamento-cadastrar.component';

describe('EstacionamentoCadastrarComponent', () => {
  let component: EstacionamentoCadastrarComponent;
  let fixture: ComponentFixture<EstacionamentoCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstacionamentoCadastrarComponent]
    });
    fixture = TestBed.createComponent(EstacionamentoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
