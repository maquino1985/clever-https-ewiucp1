import React, { useState } from "react";
import styled from "styled-components";

export interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string;
  authorName: string;
  authorAvatarUrl: string;
  logoUrl?: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 300px;
  position: relative;
  perspective: 1000px; /* Define the perspective for the card */
  transition: transform 0.5s ease-out; /* Add a smooth transition */
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const CardSubtitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 16px;
`;

const CardAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const CardAuthorAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
`;

const CardAuthorName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const CardLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
`;

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  subtitle,
  text,
  authorName,
  logoUrl,
  authorAvatarUrl,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const centerX = card.clientWidth / 2;
    const centerY = card.clientHeight / 2;
    const mouseX = e.pageX - card.offsetLeft - centerX;
    const mouseY = e.pageY - card.offsetTop - centerY;
    const maxRotation = 10;
    const rotationX = (maxRotation * mouseY) / centerY;
    const rotationY = (-maxRotation * mouseX) / centerX;
    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <CardContainer
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(50px)`,
      }}
    >
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDivider />
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>{text}</CardText>
      <CardAuthorContainer>
        <CardAuthorAvatar src={authorAvatarUrl} alt={authorName} />
        <CardAuthorName>{authorName}</CardAuthorName>
      </CardAuthorContainer>
    </CardContainer>
  );
};

export default Card;
