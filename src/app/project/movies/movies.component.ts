import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { MovieModel } from "./models/movie.model";
import { filterValues, MoviesStore } from "./state/movies.store";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
  providers: [MoviesStore],
})
export class MoviesComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "title",
      type: "input",
      props: {
        label: "Title",
        required: true,
      },
    },
  ];

  movies$ = this.store.movies$;
  fav$ = this.store.favorities$;
  filter$ = this.store.filter$;
  favorities$ = this.store.favoriteMovies$;

  constructor(private readonly store: MoviesStore) {}

  setFilter(value: filterValues) {
    this.store.setFilter(value);
  }

  addToFavorities(id: string) {
    this.store.addToFavorities(id);
  }

  delete(id: string) {
    if (!confirm("Are you sure?")) {
      return;
    }

    this.store.delete(id);
  }

  onSubmit(model: any) {
    this.store.add(<MovieModel>{
      id: crypto.randomUUID(),
      title: model.title,
    });

    this.model = {};
  }
}
