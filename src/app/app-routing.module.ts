import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "movies",
    loadChildren: () =>
      import("./project/movies/movies.module").then((m) => m.MoviesModule),
  },
  {
    path: "counter",
    loadChildren: () =>
      import("./project/counter/counter.module").then((m) => m.CounterModule),
  },
  {
    path: "books",
    loadChildren: () =>
      import("./project/books/books.module").then((m) => m.BooksModule),
  },
  {
    path: "todos",
    loadChildren: () =>
      import("./project/todos/todos.module").then((m) => m.TodosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
