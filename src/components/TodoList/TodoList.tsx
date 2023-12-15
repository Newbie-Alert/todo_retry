import { useMutation, useQuery, useQueryClient } from "react-query";
import type { ListProps, queryTypes } from "../../types/types";
import { getTodos, switchTodo } from "../../api/todoAPI";
import * as St from "./TodoListStyle";

export default function TodoList({
  isActive,
  setClicked,
  setModal,
}: ListProps) {
  // Query
  const queryClient = useQueryClient();
  const { data, isLoading, isError }: queryTypes = useQuery("todos", getTodos);
  const mutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      console.log("수정 완료");
    },
  });

  // Variables
  const filtered = isActive
    ? data?.filter((todo) => todo.isDone === false)
    : data?.filter((todo) => todo.isDone === true);

  // Functions
  // click 이벤트 발생 시
  // 서버에서 클릭 된 요소와 id가 같은 데이터를 찾아 수정
  const changeStatus = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { id } = e.currentTarget;
    const found = data?.find((el) => el.id === id);
    const edited = { ...found, isDone: !found?.isDone };
    mutation.mutate(edited);
  };

  // 클릭 된 요소의 id를 가진 데이터를 찾아
  // clicked state에 저장 / 모달 닫음
  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const found = data?.find((todo) => todo.id === id);
    setClicked(found);
    setModal(true);
  };

  if (isLoading === true) {
    return (
      <div>
        <h1>로딩 중입니다...</h1>
      </div>
    );
  }

  if (isError === true) {
    return (
      <div>
        <h1>에러가 발생하였습니다.</h1>
      </div>
    );
  }

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
