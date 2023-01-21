export type FilterStatus = "all" | "pending" | "done";

export interface Todo {
    id: string;
    task: string;
    completed: boolean;
}
