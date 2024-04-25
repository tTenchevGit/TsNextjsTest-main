import React from "react";

import { StyledSectionInnerHeading } from "./elements";

// export const SectionInnerHeading = ({ ...props }) => {
//   return <StyledSectionInnerHeading {...props} />;
// };
interface SectionInnerHeadingProps {
  [key: string]: any;
}
const SectionInnerHeading: React.FC =({ ...props }: SectionInnerHeadingProps) => {
  return <StyledSectionInnerHeading {...props} />;
  };
  
  export default SectionInnerHeading;