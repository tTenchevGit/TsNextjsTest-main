import React from "react";
import Image from "next/image";
import StyledContainer from "./elements";

interface CardComponentProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string | JSX.Element;
  description: string | JSX.Element;
}

const CardComponent: React.FC<CardComponentProps> = ({
  image,
  title,
  description,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledContainer>
  );
};

export default CardComponent;
