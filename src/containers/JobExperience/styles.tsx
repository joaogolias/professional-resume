import styled from "styled-components";
import Text from "../../components/Text";

export const JobExperience = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  margin: 10px;
  gap: 10px;
`;

export const JobSections = styled.div<JobSectionsProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
`;

interface JobSectionsProps {
  color: string;
}

export const Title = styled(Text)`
  color: white;
  padding-top: 10px;
`;
