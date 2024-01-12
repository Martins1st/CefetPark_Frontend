import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEditarComponent } from './marca-editar.component';

describe('MarcaEditarComponent', () => {
  let component: MarcaEditarComponent;
  let fixture: ComponentFixture<MarcaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaEditarComponent]
    });
    fixture = TestBed.createComponent(MarcaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
