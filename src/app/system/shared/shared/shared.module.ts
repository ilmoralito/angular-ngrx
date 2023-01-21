import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ReactiveFormsModule, FormsModule, FormlyModule],
})
export class SharedModule {}
