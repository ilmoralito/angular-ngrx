import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterRoutingModule } from "./counter-routing.module";
import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { counterFeature } from "./state/counter.reducer";

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(counterFeature),
  ],
})
export class CounterModule {}
