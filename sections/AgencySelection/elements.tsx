// Import necessary modules and types from styled-components
import styled from "styled-components";
import { SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";


interface ContainerProps {
  height?: string; 
}


export const StyledContainerMain = styled(({ height, ...props }: ContainerProps) => (
  <SectionContainer {...props} />
))`
display: flex;
align-items: center;
flex-direction: column;
  background-image: url("img/background.png");
`;

export const StyledTitleBig = styled((props: React.ComponentPropsWithoutRef<typeof SectionBigHeading>) => (
  <SectionBigHeading {...props} />
))`
  margin: ;
  align-items: center;
  color: black;
  font-size: 56px;
  
  
  @media (max-width: 1024px) {
    font-size: 26px;
    margin-right: -200px;
  
  }
  @media (min-width: 1025px) {
    white-space: nowrap; /* Prevent text from wrapping to the next line */
  }
`;

export const StyledTitleSmall = styled((props: React.ComponentPropsWithoutRef<typeof SectionSubheading>) => (
  <SectionSubheading {...props} />
))`
  margin-right: -160px;
  text-align: center;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-right: -200px;
  }
  @media (min-width: 1025px) {
    white-space: nowrap; /* Prevent text from wrapping to the next line */
  }
`;

export const StyledTextContainer = styled((props: React.HTMLProps<HTMLDivElement>) => <div {...props} />)`
  color: black;
  width: 30%;
  margin-left: -200px;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledImageContainer = styled((props: React.HTMLProps<HTMLDivElement>) => (
  <div {...props} />
))`
  max-width: 100%;
  width: 350px;
  height: 550px;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin: unset;
  }
`;

export const StyledContainerCard = styled(({ height, ...props }: ContainerProps) => (
  <SectionContainer {...props} />
))`
  flex-direction: column;
  width: 60%;
  margin: 60px;
`;

export const StyledContainerSecondMain = styled(({ height, ...props }: ContainerProps) => (
  <SectionContainer {...props} />
))`
  flex-direction: row;
  margin-top: 45px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;



export const StyledParagraph = styled.p`
  margin: 0;
  b {
    font-weight: bold;
  }
`;

export const StyledTitleColor = styled.u`
  color: blue;
`;


