import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-question',
  templateUrl: './toast-question.component.html',
  styleUrls: ['./toast-question.component.scss']
})
export class ToastQuestionComponent {

  @Output() confirmar = new EventEmitter<void>();
  @Output() rejeitar = new EventEmitter<void>();

  constructor(private readonly messageService: MessageService) {

  }


  onConfirm() {
    this.messageService.clear('confirm');
    this.confirmar.emit();
  }

  onReject() {
    this.messageService.clear('confirm');
    this.rejeitar.emit();
  }

}
