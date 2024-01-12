import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvidadoCadastrarComponent } from './convidado-cadastrar.component';

describe('ConvidadoCadastrarComponent', () => {
  let component: ConvidadoCadastrarComponent;
  let fixture: ComponentFixture<ConvidadoCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvidadoCadastrarComponent]
    });
    fixture = TestBed.createComponent(ConvidadoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
