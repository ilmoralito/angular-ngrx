import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { BookModel } from "./models/book.model";
import { booksActions } from "./state/books.actions";
import { BooksState } from "./state/books.reducer";
import { selectBookListPageViewModel } from "./state/books.selectors";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent {
  vm$ = this.store.select(selectBookListPageViewModel);

  constructor(private readonly store: Store<{ books: BooksState }>) {}

  add() {
    const book = <BookModel>{
      id: crypto.randomUUID(),
      title: "lorem ipsum",
      stock: Math.floor(Math.random() * 100),
    };

    this.store.dispatch(booksActions.add({ book }));
  }

  delete(id: string) {
    this.store.dispatch(booksActions.delete({ id }));
  }

  incrementStock(id: string) {
    this.store.dispatch(booksActions.incrementStock({ id }));
  }

  decrementStock(id: string) {
    this.store.dispatch(booksActions.decrementStock({ id }));
  }

  resetStock(id: string) {
    this.store.dispatch(booksActions.resetStock({ id }));
  }

  setStock(id: string) {
    this.store.dispatch(
      booksActions.setStock({ id, value: Math.floor(Math.random() * 100) })
    );
  }
}
