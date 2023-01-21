import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { MovieModel } from "../models/movie.model";

export type filterValues = "all" | "favorites";

export interface MoviesState {
    collection: MovieModel[];
    favorites: string[];
    filter: filterValues;
}

export const initialState: MoviesState = {
    collection: [],
    favorites: [],
    filter: "all",
};

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
    constructor() {
        super(initialState);
    }

    readonly movies$ = this.select((state) => state.collection);

    readonly favorities$ = this.select((state) => state.favorites);

    readonly filter$ = this.select((state) => state.filter);

    readonly favoriteMovies$ = this.select(
        this.movies$,
        this.favorities$,
        (movies, favorities) =>
            movies.filter((movie) => favorities.includes(movie.id))
    );

    readonly filteredMovies$ = this.select(
        this.movies$,
        this.filter$,
        (movies, filter) => {
            switch (filter) {
                case "all":
                    return movies;
                case 'favorites':
                    return 
            }
        }
    );

    // readonly vm$ = this.select({
    //     movies: this.movies$,
    //     favorities: this.favorities$,
    //     favoriteMovies: this.favoriteMovies$,
    // });

    readonly addToFavorities = this.updater((state, id: string) => ({
        ...state,
        favorites: state.favorites.includes(id)
            ? state.favorites.filter((favorite) => favorite !== id)
            : [...state.favorites, id],
    }));

    readonly add = this.updater((state, movie: MovieModel) => ({
        ...state,
        collection: [...state.collection, movie],
    }));

    readonly delete = this.updater((state, id: string) => ({
        ...state,
        collection: state.collection.filter((movie) => movie.id !== id),
    }));

    readonly setFilter = this.updater((state, value: filterValues) => ({
        ...state,
        filter: value,
    }));
}
