import styled from "styled-components";

const InputContainer = styled.form`
  width: 100%;
  max-width: 1280px;
  min-width: 800px;
  margin: auto;
  margin-block: 1rem;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  background-color: var(--background-dark);
`;

const InputWrapper = styled.div`
  width: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputBox = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputLabel = styled.span`
  width: fit-content;
`;

const InputEl = styled.input.attrs((props) => ({
  type: "text",
  placeholder:
    props.role === "title" ? "제목을 입력하세요" : "내용을 입력하세요",
  required: true,
}))`
  border-radius: 6px;
  padding: 0.4rem 0.3rem;
  border: none;
  outline: none;
  color: white;
  background: #eeeeee30;

  &::placeholder {
    color: white;
  }
`;

const Button = styled.button.attrs({
  type: "submit",
})`
  padding: 1.9rem;
  outline: none;
  border: none;
  background: #eeeeee50;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    background: var(--button-hover-color);
  }
`;

export {
  InputContainer,
  InputWrapper,
  InputBox,
  InputLabel,
  InputEl,
  Button
}