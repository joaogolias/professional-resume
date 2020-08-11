import Introduction from "../containers/Introduction";
import Header from "../containers/Header";
import Knowledge from "../containers/Knowledge";
import JobExperience from "../containers/JobExperience";
import Projects from "../containers/Projects";
import Volunteering from "../containers/Volunteering";
import HireMe from "../containers/HireMe";
import Footer from "../containers/Footer";
import styled from "styled-components";

export const App = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const IntroductionContainer = styled(Introduction)`
  height: 100vh;
`;
export const HeaderContainer = styled(Header)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 32px;
  background-color: transparent;
`;

export const KnowledgeContainer = styled(Knowledge)`
  margin-top: 10px;
`;

export const JobExperienceContainer = styled(JobExperience)`
  margin: 10px;
`;

export const ProjectsContainer = styled(Projects)``;

export const VolunteeringContainer = styled(Volunteering)`
  margin: 10px;
`;

export const HireMeContainer = styled(HireMe)`
  margin-top: 10px;
`;

export const FooterContainer = styled(Footer)``;
