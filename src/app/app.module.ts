import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routes/routing.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { CoreModule } from './core/core.module';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    LayoutModule,
    HttpClientModule,
    CoreModule,
    ToastModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [CookieService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
