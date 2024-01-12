import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaCadastrarComponent } from './marca-cadastrar.component';

describe('MarcaCadastrarComponent', () => {
  let component: MarcaCadastrarComponent;
  let fixture: ComponentFixture<MarcaCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaCadastrarComponent]
    });
    fixture = TestBed.createComponent(MarcaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
