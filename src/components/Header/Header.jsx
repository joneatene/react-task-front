import React from "react";
import * as S from "./Header.style";

const Header = () => {
  return (
    <header>
      <S.NavBlock>
        <S.NavLink to="/register">Register</S.NavLink>
        <S.NavLink to="/">Login</S.NavLink>
      </S.NavBlock>
    </header>
  );
};

export default Header;
