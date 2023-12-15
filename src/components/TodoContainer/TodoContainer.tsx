import { useState } from "react";
import type { Todos } from "../../types/types";
import TodoList from "../TodoList/TodoList";
import * as St from "./TodoContainerStyle";
import Modal from "../Modal/Modal";

export default function Todo() {
  const [clicked, setClicked] = useState<Todos | undefined>(undefined);
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <St.TodoContainer>
        <TodoList isActive={true} setClicked={setClicked} setModal={setModal} />
        <TodoList
          isActive={false}
          setClicked={setClicked}
          setModal={setModal}
        />
      </St.TodoContainer>
      {modal && <Modal clicked={clicked} setModal={setModal} />}
    </>
  );
}
