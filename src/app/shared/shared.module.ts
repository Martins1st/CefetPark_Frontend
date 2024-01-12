import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ToastQuestionComponent } from './components/toast-question/toast-question.component';
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    ToastQuestionComponent,
    NotfoundComponent
  ],
  imports: [
    ToastModule,
    ButtonModule
  ],
  exports:[
    ToastQuestionComponent
  ],
  providers: []
})
export class SharedModule { }
