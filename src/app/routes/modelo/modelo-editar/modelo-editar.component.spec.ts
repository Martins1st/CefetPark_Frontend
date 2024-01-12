import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEditarComponent } from './modelo-editar.component';

describe('ModeloEditarComponent', () => {
  let component: ModeloEditarComponent;
  let fixture: ComponentFixture<ModeloEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeloEditarComponent]
    });
    fixture = TestBed.createComponent(ModeloEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
