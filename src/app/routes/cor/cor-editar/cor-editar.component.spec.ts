import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorEditarComponent } from './cor-editar.component';

describe('CorEditarComponent', () => {
  let component: CorEditarComponent;
  let fixture: ComponentFixture<CorEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorEditarComponent]
    });
    fixture = TestBed.createComponent(CorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
