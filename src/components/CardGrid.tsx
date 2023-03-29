import React from "react";
import Card, { CardProps } from "./Card";

interface CardGridProps {
  cards: CardProps[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid-container">
      {cards.map((cardProps) => (
        <Card key={cardProps.title} {...cardProps} />
      ))}
    </div>
  );
};

export default CardGrid;
