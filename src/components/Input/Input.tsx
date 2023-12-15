import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { v4 as uuid } from "uuid";
import type { UserInput } from "../../types/types";
import { addTodo } from "../../api/todoAPI";
import * as St from "./InputStyle";

export default function Input() {
  // Query
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      console.log("등록 완료");
    },
  });

  // Ref
  const initRef = useRef<any>();

  // State
  const [userInput, setUserInput] = useState<UserInput>({
    id: uuid(),
    title: "",
    text: "",
    createdAt: new Date().toISOString(),
    isDone: false,
  });

  // Functions
  // input 값을 받아서 state 업데이트
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { role, value } = e.currentTarget;
    role === "title" && setUserInput((prev) => ({ ...prev, title: value }));
    role === "text" && setUserInput((prev) => ({ ...prev, text: value }));
  };

  // submit 이벤트 발생 시 서버에 userInput 데이터 등록
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutation.mutate(userInput);
    setUserInput({
      id: uuid(),
      title: "",
      text: "",
      createdAt: new Date().toISOString(),
      isDone: false,
    });
    initRef.current.focus();
  };

  // hooks
  useEffect(() => {
    initRef.current.focus();
  }, []);

  return (
    <St.InputContainer onSubmit={handleSubmit}>
      <St.InputWrapper>
        <St.InputBox>
          <St.InputLabel>Title :</St.InputLabel>
          <St.InputEl
            ref={initRef}
            onChange={handleChange}
            value={userInput.title}
            role={"title"}
          />
        </St.InputBox>
        <St.InputBox>
          <St.InputLabel>Text :</St.InputLabel>
          <St.InputEl
            onChange={handleChange}
            value={userInput.text}
            role={"text"}
          />
        </St.InputBox>
      </St.InputWrapper>
      <St.Button>Submit</St.Button>
    </St.InputContainer>
  );
}
