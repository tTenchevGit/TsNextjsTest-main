import React from "react";
import { StyledSectionTinyHeading } from "./elements";

interface SectionTinyHeadingProps {
  [key: string]: any;
}

const SectionTinyHeading: React.FC =({ ...props }: SectionTinyHeadingProps) => {
  return <StyledSectionTinyHeading {...props} />;
  };
  
  export default SectionTinyHeading;
