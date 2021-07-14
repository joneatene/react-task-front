import React from "react";
import PropTypes from "prop-types";
import * as S from "./Card.style";
import Button from "../Button/Button";

const Card = ({ image, score }) => (
  <S.CardBlock>
    <S.CardImage src={image} />
    <h5>Score: {score}</h5>
    <S.ButtonBlock>
      <Button color="primary">+</Button>
      <Button color="secondary">-</Button>
    </S.ButtonBlock>
  </S.CardBlock>
);

Card.propTypes = {
  image: PropTypes.string,
  score: PropTypes.string,
};

export default Card;
