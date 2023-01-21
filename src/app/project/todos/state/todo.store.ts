import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { FilterStatus, Todo } from "../models/todo.model";

export interface TodoState {
    todos: Todo[];
    filter: FilterStatus;
}

export const initialState: TodoState = {
    todos: [],
    filter: "all",
};

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {
    constructor() {
        super(initialState);
    }

    readonly todos$ = this.select((state) => state.todos);

    readonly filter$ = this.select((state) => state.filter);

    readonly vm$ = this.select(this.todos$, this.filter$, (todos, filter) => ({
        todos:
            filter === "all"
                ? todos
                : filter === "pending"
                ? todos.filter((todo) => !todo.completed)
                : todos.filter((todo) => todo.completed),
        filter,
    }));

    readonly add = this.updater((state, todo: Todo) => ({
        ...state,
        todos: [...state.todos, todo],
    }));

    readonly toggle = this.updater((state, id: string) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === id
                ? { ...todo, completed: !todo.completed }
                : { ...todo }
        ),
    }));

    readonly setFilter = this.updater((state, filter: FilterStatus) => ({
        ...state,
        filter,
    }));
}
