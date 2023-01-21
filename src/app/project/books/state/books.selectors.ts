import { createSelector } from "@ngrx/store";
import { selectBooks, selectLoading } from "./books.reducer";

export const selectBookListPageViewModel = createSelector(
    selectBooks,
    selectLoading,
    (books, loading) => ({ books, loading })
);
