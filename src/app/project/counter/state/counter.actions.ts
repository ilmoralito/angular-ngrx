import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const counterActions = createActionGroup({
    source: "Counter component",
    events: {
        increment: emptyProps(),
        decrement: emptyProps(),
        reset: emptyProps(),
        set: props<{ value: number }>(),
    },
});
