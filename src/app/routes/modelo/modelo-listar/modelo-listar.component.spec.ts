import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloListarComponent } from './modelo-listar.component';

describe('ModeloListarComponent', () => {
  let component: ModeloListarComponent;
  let fixture: ComponentFixture<ModeloListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeloListarComponent]
    });
    fixture = TestBed.createComponent(ModeloListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
