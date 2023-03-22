import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Rating.scss";

interface RatingProps {
  id: number;
  rating: number;
}

export default function Rating({ id, rating }: RatingProps) {
  const firstDigit = () => {
    return Math.floor(rating);
  };

  const secondDigit = () => {
    const decimal = rating - firstDigit();

    if (decimal >= 0.5) {
      return true;
    }

    return false;
  };

  return (
    <>
      {[...Array(firstDigit())].map((i, index) => (
        <FontAwesomeIcon key={`${id}-${index}`} icon={faStar} color="#FF8A14" />
      ))}

      {secondDigit() && <FontAwesomeIcon icon={faStarHalf} color="#FF8A14" />}
    </>
  );
}
