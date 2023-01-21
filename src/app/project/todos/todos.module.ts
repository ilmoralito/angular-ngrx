import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TodosRoutingModule } from "./todos-routing.module";
import { TodosComponent } from "./todos.component";
import { SharedModule } from "src/app/system/shared/shared/shared.module";

@NgModule({
  declarations: [TodosComponent],
  imports: [CommonModule, SharedModule, TodosRoutingModule],
})
export class TodosModule {}
