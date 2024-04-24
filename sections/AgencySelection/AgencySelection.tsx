import React from "react";
import Image from "next/image";
import CardComponent from "../../collections/Card/Card";

import {
  StyledContainerMain
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
}

const AgencySelection: React.FC<AgencySelectionProps> = ({ image, title, description, ...props }) => {
  return (
    <StyledContainerMain {...props}>
     Managed 
     
    </StyledContainerMain>
  );
};

export default AgencySelection;
