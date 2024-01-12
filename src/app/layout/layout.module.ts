
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    TopbarComponent,
     FooterComponent,
     LeftbarComponent,
     LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
    exports:[

    ],
    providers: [

    ]
})
export class LayoutModule { }
