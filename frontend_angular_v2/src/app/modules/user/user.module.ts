import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMasterComponent } from './user-master/user-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserMasterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})

export class UserModule { }