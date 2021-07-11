import React from "react";
import * as S from "./Header.style";

const Header = () => (
    <header>
        <S.NavBlock>
            <S.NavLink>Register</S.NavLink>
            <S.NavLink>Login</S.NavLink>
        </S.NavBlock>
    </header>
);

export default Header;