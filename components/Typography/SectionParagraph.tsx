// import { StyledSectionParagraph } from "./elements";

// export const SectionParagraph = ({ ...props }) => {
//   return <StyledSectionParagraph {...props} />;
// };
import React from "react";
import { StyledSectionParagraph } from "./elements";
interface SectionParagraphProps {
  [key: string]: any;
}
const SectionParagraph: React.FC =({ ...props }: SectionParagraphProps) => {
  return <StyledSectionParagraph {...props} />;
  };
  
  export default SectionParagraph;