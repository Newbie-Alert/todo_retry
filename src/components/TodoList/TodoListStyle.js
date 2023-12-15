import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 6px;
  border: 1px solid #eeeeee50;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemTitle = styled.h3`
  width: 90px;
`;

const ItemText = styled.h3`
  width: 90px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button.attrs({
  type: "button",
})`
  width: 120px;
  padding: 0.4rem;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.role === "삭제" ? "#ff726750" : "#3b9cf250"};
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
    props.role === "삭제" ? "#ff7267" : "#3b9cf2"};
  }
`;

export {
  ListContainer,
  ListItem,
  ItemTitle,
  ItemText,
  ButtonBox,
  Button
}