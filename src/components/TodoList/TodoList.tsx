import { useEffect } from "react";
import { todoAPI } from "../../api/todoAPI";
import { useAppDispatch, useAppSelector } from "../../hooks/useTodoSlice";
import { selectTodos, setTodo } from "../../redux/modules/todos";
import type { ListProps, Todos } from "../../types/types";
import * as St from "./TodoListStyle";

export default function TodoList({
  isActive,
  setClicked,
  setModal,
}: ListProps) {
  const { todos } = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const filtered = isActive
    ? todos?.filter((todo) => todo.isDone === false)
    : todos?.filter((todo) => todo.isDone === true);

  const todoSwitchToggle = async (id: string, edited: Partial<Todos>) => {
    await todoAPI.patch(`/todos/${id}`, edited);
    fetchTodos();
  };

  const changeStatus = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { id } = e.currentTarget;
    const edited = todos.find((el) => el.id === id);
    todoSwitchToggle(id, { ...edited, isDone: !edited?.isDone });
  };

  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const found = todos?.find((todo) => todo.id === id);
    setClicked(found);
    setModal(true);
  };

  const fetchTodos = async () => {
    try {
      const res = await todoAPI.get("/todos");
      dispatch(setTodo(res.data));
    } catch (err) {
      alert("데이터를 가져올 수 없습니다");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <St.ListContainer>
      {filtered?.map((todo) => {
        return (
          <St.ListItem key={todo.id}>
            <St.ItemTitle>{todo.title}</St.ItemTitle>
            <St.ItemText>{todo.text}</St.ItemText>
            <h4>{todo.createdAt.slice(0, 10)}</h4>
            <St.ButtonBox>
              <St.Button onClick={changeStatus} id={todo.id}>
                {isActive ? "완료" : "취소"}
              </St.Button>
              <St.Button id={todo.id} role={"삭제"} onClick={handleClicked}>
                삭제
              </St.Button>
            </St.ButtonBox>
          </St.ListItem>
        );
      })}
    </St.ListContainer>
  );
}
