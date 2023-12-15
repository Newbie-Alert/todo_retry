import * as St from "./ModalStyle";
import type { ModalProps } from "../../types/types";
import { Button } from "../TodoList/TodoListStyle";
import { useAppDispatch } from "../../hooks/useTodoSlice";
import { setTodo } from "../../redux/modules/todos";
import { todoAPI } from "../../api/todoAPI";

export default function Modal({ clicked, setModal }: ModalProps) {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setModal(false);
  };

  const fetchTodos = async () => {
    try {
      const res = await todoAPI.get("/todos");
      dispatch(setTodo(res.data));
    } catch (err) {
      alert("데이터를 가져올 수 없습니다");
    }
  };

  const __deleteTodo = async () => {
    try {
      await todoAPI.delete(`/todos/${clicked?.id}`);
      fetchTodos();
    } catch (err) {
      alert("삭제 실패");
    }
  };

  const deleteTodo = () => {
    __deleteTodo();
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
