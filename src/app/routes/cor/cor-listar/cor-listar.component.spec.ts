import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorListarComponent } from './cor-listar.component';

describe('CorListarComponent', () => {
  let component: CorListarComponent;
  let fixture: ComponentFixture<CorListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorListarComponent]
    });
    fixture = TestBed.createComponent(CorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
