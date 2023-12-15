import type { TodoContainerProps } from "../../types/types";
import TodoList from "../TodoList/TodoList";
import * as St from "./TodoContainerStyle";

export default function Todo({ setClicked, setModal }: TodoContainerProps) {
  return (
    <St.TodoContainer>
      <TodoList isActive={true} setClicked={setClicked} setModal={setModal} />
      <TodoList isActive={false} setClicked={setClicked} setModal={setModal} />
    </St.TodoContainer>
  );
}
