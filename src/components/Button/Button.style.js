import styled from "styled-components";

export const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${props => props.color === "primary" ? "#6b705c" : "#b7b7a4"};
    color: #FFFFFF;
    padding: 0.5rem 2rem;
    font-size: 0.8rem;
    text-transform: uppercase;
`;