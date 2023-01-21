import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "src/app/system/shared/shared/shared.module";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MoviesComponent } from "./movies.component";

@NgModule({
  declarations: [MoviesComponent],
  imports: [CommonModule, SharedModule, MoviesRoutingModule],
})
export class MoviesModule {}
