import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BookModel } from "../models/book.model";

export const booksActions = createActionGroup({
    source: "books component",
    events: {
        add: props<{ book: BookModel }>(),
        delete: props<{ id: string }>(),
        enter: props<{ loading: boolean }>(),
        "load books success": props<{ books: BookModel[]; loading: boolean }>(),
        "increment stock": props<{ id: string }>(),
        "decrement stock": props<{ id: string }>(),
        "reset stock": props<{ id: string }>(),
        "set stock": props<{ id: string, value: number }>(),
    },
});
