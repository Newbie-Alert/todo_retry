import { v4 as uuid } from "uuid";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import type { UserInput } from "../../types/types";

import * as St from "./InputStyle";
import { useAppDispatch } from "../../hooks/useTodoSlice";
import { addTodo } from "../../redux/modules/todos";

export default function Input() {
  const initRef = useRef<any>();
  const dispatch = useAppDispatch();

  const [userInput, setUserInput] = useState<UserInput>({
    id: uuid(),
    title: "",
    text: "",
    createdAt: new Date().toISOString(),
    isDone: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { role, value } = e.currentTarget;
    role === "title" && setUserInput((prev) => ({ ...prev, title: value }));
    role === "text" && setUserInput((prev) => ({ ...prev, text: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTodo(userInput));
    setUserInput({
      id: uuid(),
      title: "",
      text: "",
      createdAt: new Date().toISOString(),
      isDone: false,
    });
    initRef.current.focus();
  };

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
