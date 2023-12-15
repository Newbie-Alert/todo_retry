import * as St from "./ModalStyle";
import type { ModalProps } from "../../types/types";
import { Button } from "../TodoList/TodoListStyle";
import { useAppDispatch } from "../../hooks/useTodoSlice";
import { removeTodo } from "../../redux/modules/todos";

export default function Modal({ clicked, setModal }: ModalProps) {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setModal(false);
  };

  const deleteTodo = () => {
    dispatch(removeTodo(clicked?.id));
    closeModal();
  };

  return (
    <St.ModalBg>
      <St.ModalBox>
        <St.ModalText>
          <span>{clicked?.title}</span> 을 삭제하시겠습니까?
        </St.ModalText>
        <St.ButtonBox>
          <Button onClick={deleteTodo} role="삭제">
            삭제
          </Button>
          <Button onClick={closeModal}>취소</Button>
        </St.ButtonBox>
      </St.ModalBox>
    </St.ModalBg>
  );
}
