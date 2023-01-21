import { createFeature, createReducer, on } from "@ngrx/store";
import { counterActions } from "./counter.actions";

export const initialState = 0;

export const counterFeature = createFeature({
    name: "counter",
    reducer: createReducer(
        initialState,
        on(counterActions.increment, (state) => state + 1),
        on(counterActions.decrement, (state) => state - 1),
        on(counterActions.reset, (state) => 0),
        on(counterActions.set, (state, { value }) => value)
    ),
});

export const { name, reducer, selectCounterState } = counterFeature;
