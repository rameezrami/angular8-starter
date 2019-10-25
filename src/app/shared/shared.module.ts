import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/layout/app-layout/app-layout.component';



@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,RouterModule
  ]
})
export class SharedModule { }
