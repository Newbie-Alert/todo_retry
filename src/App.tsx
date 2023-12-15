import React, { useState } from "react";
import type { Todos } from "./types/types";
import Header from "./components/Header/Header";
import styled from "styled-components";
import Input from "./components/Input/Input";
import Todo from "./components/TodoContainer/TodoContainer";
import Modal from "./components/Modal/Modal";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--background-little-dark);
  position: relative;
`;

const App: React.FC = () => {
  const [clicked, setClicked] = useState<Todos | undefined>(undefined);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <AppContainer>
      <Header />
      <Input />
      <Todo setClicked={setClicked} setModal={setModal} />
      {modal && <Modal clicked={clicked} setModal={setModal} />}
    </AppContainer>
  );
};

export default App;
