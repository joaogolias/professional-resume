import styled from "styled-components";

export const LargestText = styled.p`
  font-size: 38pt;
  @media (max-width: 600px) {
    font-size: 24pt;
  }
`;

export const LargeText = styled.p`
  font-size: 18pt;
  @media (max-width: 600px) {
    font-size: 16pt;
  }
`;

export const MediumText = styled.p`
  font-size: 12pt;
  @media (max-width: 600px) {
    font-size: 10pt;
  }
`;

export const SmallText = styled.p`
  font-size: 9pt;
`;
