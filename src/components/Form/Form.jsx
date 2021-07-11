import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import * as S from "./Form.style";
import Button from "../Button/Button";

const Form = ({type}) => {
    const validation = (e) => {
        const email = e.target.elements.email.value.trim();
        const password = e.target.elements.password.value.trim();


        if(email && password) {
            const schema = Yup.object().shape({
                email: Yup.string().email().max(255).min(5).required(),
                password: Yup.string().max(255).min(8).required(),
              });
             
              schema.isValid({ email, password }).then((data) => {
                data ? alert("All good") : alert("Bad email or password");
              });

        } else {
            alert("Please write in email and password")
        }
    }
    return (
        <form onSubmit={validation}>
            <S.Input type="email" name="email" minLength="4" maxLength="255" placeholder="Email" required/>
            <S.Input type="password" name="password" minLength="8" maxLength="255" placeholder="Password" required/>
            <Button type="submit" color="primary" handleClick="submit">{type}</Button>
        </form>
    )
};

Form.propTypes = {
    type: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default Form;