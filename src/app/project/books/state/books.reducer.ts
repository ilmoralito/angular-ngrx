import { createFeature, createReducer, on } from "@ngrx/store";
import { BookModel } from "../models/book.model";
import { booksActions } from "./books.actions";

export interface BooksState {
    books: BookModel[];
    loading: boolean;
}

export const initialState: BooksState = {
    books: [],
    loading: false,
};

export const booksFeature = createFeature({
    name: "books",
    reducer: createReducer(
        initialState,
        on(booksActions.add, (state, { book }) => ({
            ...state,
            books: [...state.books, book],
        })),
        on(booksActions.delete, (state, { id }) => ({
            ...state,
            books: state.books.filter((book) => book.id !== id),
        })),
        on(booksActions.enter, (state) => ({ ...state, loading: true })),
        on(booksActions.loadBooksSuccess, (state, { books }) => ({
            ...state,
            books,
            loading: false,
        })),
        on(booksActions.incrementStock, (state, { id }) => ({
            ...state,
            books: state.books.map((book) =>
                book.id === id
                    ? { ...book, stock: book.stock + 1 }
                    : { ...book }
            ),
        })),
        on(booksActions.decrementStock, (state, { id }) => ({
            ...state,
            books: state.books.map((book) =>
                book.id === id
                    ? { ...book, stock: book.stock - 1 }
                    : { ...book }
            ),
        })),
        on(booksActions.resetStock, (state, { id }) => ({
            ...state,
            books: state.books.map((book) =>
                book.id === id ? { ...book, stock: 0 } : { ...book }
            ),
        })),
        on(booksActions.setStock, (state, { id, value }) => ({
            ...state,
            books: state.books.map((book) =>
                book.id === id ? { ...book, stock: value } : { ...book }
            ),
        }))
    ),
});

export const { name, reducer, selectBooks, selectLoading, selectBooksState } =
    booksFeature;
