import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { Todos } from "../../types/types";
import { todoAPI } from "../../api/todoAPI";

interface Init {
  todos: Todos[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

const initialState: Init = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __addTodo = createAsyncThunk(
  "ADD_TODO",
  async (payload: Todos, thunkAPI) => {
    try {
      await todoAPI.post("/todos", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  "SWITCH_TODO",
  async (payload: Partial<Todos>, thunkAPI) => {
    try {
      await todoAPI.patch(`/todos/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "DELETE_TODO",
  async (payload: Partial<Todos> | undefined, thunkAPI) => {
    try {
      await todoAPI.delete(`/todos/${payload?.id}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __fetchTodo = createAsyncThunk(
  "FETCH_TODO",
  async (_, thunkAPI) => {
    try {
      const res = await todoAPI.get("/todos");
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todos[]>) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__fetchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__fetchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload;
      })
      .addCase(__fetchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });

    builder
      .addCase(__addTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(__addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });

    builder
      .addCase(__switchTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__switchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        });
      })
      .addCase(__switchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });

    builder
      .addCase(__deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(__deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload?.id
        );
      })
      .addCase(__deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { setTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
