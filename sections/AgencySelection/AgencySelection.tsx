import React from "react";
import Image from "next/image";
import CardComponent from "../../collections/Card/Card";
import {
  StyledContainerMain,
  StyledTitleBig,
  StyledTitleSmall,
  StyledTextContainer,
  StyledImageContainer,
  StyledContainerCard,
  StyledContainerSecondMain,
  StyledParagraph,
  StyledTitleColor
} from "./elements";

interface CardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string | JSX.Element;
  description: string | JSX.Element;
}

interface AgencySelectionProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string | JSX.Element;
  style?: React.CSSProperties;
  isHomePage?: boolean;
}

const CardComponentProps: CardProps[] = [
  {
    image: { src: "/img/card1.png", alt: "", width: 65, height: 65 },
    title: "Brief",
    description: (
      <StyledParagraph>
        Complete <b> brief writing and or simple guidance </b> on what
        to include, we've got you coverted.
      </StyledParagraph>
    )
  },
  {
    image: { src: "/img/card2.png", alt: "", width: 65, height: 65 },
    title: "Search",
    description: (
      <StyledParagraph>
        "In-depth agency search covering; <b>criteria matching</b>, door
        knocking and due dilligence vetting."
      </StyledParagraph>
    )
  },
  {
    image: { src: "/img/card3.png", alt: "", width: 65, height: 65 },
    title: <StyledTitleColor>Pitch</StyledTitleColor>,
    description: (
      <StyledParagraph>
        "Comprehensive <b>pitch management</b>, including comms, diary
        management and pitch hosting."
      </StyledParagraph>
    )
  }
];

const AgencySelection: React.FC<AgencySelectionProps> = ({
  image,
  title,
  description,
  ...props
}) => {
  return (
    <StyledContainerMain {...props}>
      <StyledTextContainer>
        <StyledTitleBig>{title}</StyledTitleBig>
        <StyledTitleSmall>{description}</StyledTitleSmall>
      </StyledTextContainer>
      <StyledContainerSecondMain {...props}>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <StyledContainerCard {...props}>
        {CardComponentProps.map((props, index) => (
            <CardComponent
              key={index}
              {...props}
              style={index === 2 ? { border: '2px solid blue' } : undefined}
            />
          ))}
          {/* {CardComponentProps.map((props) => (
          <CardComponent key={`${props.image.src}-${typeof props.title === 'string' ? props.title : ''}`} {...props} />
          ))} */}
        </StyledContainerCard>
      </StyledContainerSecondMain>
    </StyledContainerMain>
  );
};

export default AgencySelection;
