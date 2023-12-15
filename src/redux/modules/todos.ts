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
    setTodo: (state, action: PayloadAction<Todos[]>) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
