import React from "react";
import Image from "next/image";
import {
  StyledContainer,
  StyledTitleBold,
  StyledDescriptionSmall,
  StyledTextContainer,
  StyledImageContainer,
} from "./elements";

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
      <StyledImageContainer>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledTitleBold>
        {title}
        </StyledTitleBold>
        <StyledDescriptionSmall>{description}</StyledDescriptionSmall>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default CardComponent;
