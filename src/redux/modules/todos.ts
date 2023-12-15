import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Todos } from "../../types/types";

interface Init {
  todos: Todos[];
}

const initialState: Init = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todos>) => {
      state.todos.push(action.payload);
    },
    switchTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
    removeTodo: (state, action: PayloadAction<string | undefined>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, switchTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
