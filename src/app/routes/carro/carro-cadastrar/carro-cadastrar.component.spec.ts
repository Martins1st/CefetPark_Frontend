import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCadastrarComponent } from './carro-cadastrar.component';

describe('CarroCadastrarComponent', () => {
  let component: CarroCadastrarComponent;
  let fixture: ComponentFixture<CarroCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroCadastrarComponent]
    });
    fixture = TestBed.createComponent(CarroCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
