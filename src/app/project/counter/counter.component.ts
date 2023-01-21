import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent {
  // counter = this.store.select()

  constructor(private readonly store: Store<{ counter: number }>) {}
}
