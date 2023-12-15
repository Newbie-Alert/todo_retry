import { useMutation, useQueryClient } from "react-query";
import * as St from "./ModalStyle";
import type { ModalProps } from "../../types/types";
import { Button } from "../TodoList/TodoListStyle";
import { deleteTodo } from "../../api/todoAPI";

export default function Modal({ clicked, setModal }: ModalProps) {
  // Query
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // Functions
  const closeModal = () => {
    setModal(false);
  };

  // click 이벤트 발생 시
  // 클릭 된 요소와 id가 같은 데이터를 찾아
  // 서버에서 삭제
  const handleDelete = () => {
    mutation.mutate(clicked?.id);
    closeModal();
  };

  return (
    <St.ModalBg>
      <St.ModalBox>
        <St.ModalText>
          <span>{clicked?.title}</span> 을 삭제하시겠습니까?
        </St.ModalText>
        <St.ButtonBox>
          <Button onClick={handleDelete} role="삭제">
            삭제
          </Button>
          <Button onClick={closeModal}>취소</Button>
        </St.ButtonBox>
      </St.ModalBox>
    </St.ModalBg>
  );
}
