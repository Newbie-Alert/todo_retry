import React from "react";
import * as St from "./HeaderStyle";

const Header: React.FC = () => {
  return (
    <St.HeaderContainer>
      <St.HeaderLogo>TodoList</St.HeaderLogo>
      <St.HeaderTitle>TS + React + RTK + json-server + thunk</St.HeaderTitle>
    </St.HeaderContainer>
  );
};

export default Header;
