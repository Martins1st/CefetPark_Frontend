import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastQuestionComponent } from './toast-question.component';

describe('ToastQuestionComponent', () => {
  let component: ToastQuestionComponent;
  let fixture: ComponentFixture<ToastQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastQuestionComponent]
    });
    fixture = TestBed.createComponent(ToastQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
