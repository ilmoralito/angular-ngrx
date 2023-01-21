import { Component } from "@angular/core";
import { FilterStatus, Todo } from "./models/todo.model";
import { TodoStore } from "./state/todo.store";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
  providers: [TodoStore],
})
export class TodosComponent {
  vm$ = this.store.vm$;

  constructor(private readonly store: TodoStore) {}

  add() {
    this.store.add(<Todo>{
      id: crypto.randomUUID(),
      task: "random",
      completed: false,
    });
  }

  toggle(id: string) {
    this.store.toggle(id);
  }

  filter(value: FilterStatus) {
    this.store.setFilter(value);
  }
}
