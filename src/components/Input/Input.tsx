import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import type { UserInput } from "../../types/types";
import * as St from "./InputStyle";
import { useAppDispatch } from "../../hooks/useTodoSlice";
import { setTodo } from "../../redux/modules/todos";
import { todoAPI } from "../../api/todoAPI";

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

  const addTodos = async () => {
    try {
      todoAPI.post("/todos", userInput);
    } catch (err) {
      alert("등록 실패");
    }
  };

  const fetchTodos = async () => {
    try {
      const res = await todoAPI.get("/todos");
      dispatch(setTodo(res.data));
    } catch (err) {
      alert("데이터를 가져올 수 없습니다");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodos();
    setUserInput({
      id: uuid(),
      title: "",
      text: "",
      createdAt: new Date().toISOString(),
      isDone: false,
    });
    initRef.current.focus();
    fetchTodos();
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
