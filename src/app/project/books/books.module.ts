import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books.component";
import { StoreModule } from "@ngrx/store";
import { booksFeature } from "./state/books.reducer";

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature(booksFeature),
  ],
})
export class BooksModule {}
