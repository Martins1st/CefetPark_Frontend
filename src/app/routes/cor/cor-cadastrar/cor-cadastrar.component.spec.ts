import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorCadastrarComponent } from './cor-cadastrar.component';

describe('CorCadastrarComponent', () => {
  let component: CorCadastrarComponent;
  let fixture: ComponentFixture<CorCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorCadastrarComponent]
    });
    fixture = TestBed.createComponent(CorCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
