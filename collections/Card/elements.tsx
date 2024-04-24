import React from "react";
import styled, { StyledComponent } from "styled-components";
import { SectionContainer } from "~/components";

interface StyledContainerProps {
  height?: string;
}

// Define StyledContainer with the correct type annotations
const StyledContainer: StyledComponent<
  typeof SectionContainer,
  any, 
  StyledContainerProps 
> = styled(({ height, ...props }: StyledContainerProps) => (
  <SectionContainer {...props} />
))<StyledContainerProps>`
  /* Add your styles here */
`;

export default StyledContainer;
