import React from "react";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Todo from "./components/TodoContainer/TodoContainer";
import * as St from "./AppStyles";

const App: React.FC = () => {
  return (
    <St.AppContainer>
      <Header />
      <Input />
      <Todo />
    </St.AppContainer>
  );
};

export default App;
