import styled from "styled-components";
import { SectionContainer } from "~/components";
import { SectionSubheading } from "~/components/Typography/SectionSubheading";
import { SectionBigHeading } from "~/components/Typography";

interface StyledContainerProps {
  height?: string;
}

interface StyledTitleBoldProps {
  titleStyleProps?: string;
}

interface AgencySelectionProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string | JSX.Element; // Ensure description matches the expected type
}

export const StyledContainer = styled(SectionContainer)<StyledContainerProps>`
  align-items: center;
  margin-bottom: 30px;
  background: #EEEEEE;
  width: 100%;
`;

export const StyledTitleBold = styled(SectionBigHeading)<StyledTitleBoldProps>`
  margin: 0;
  color: black;
  font-size: 24px;
  ${({ titleStyleProps }) => titleStyleProps}
`;

export const StyledDescriptionSmall = styled(SectionSubheading)`
  margin: 0;
`;

export const StyledTextContainer = styled.div`
  color: black;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled.div`
  margin: 20px 25px;
`;
