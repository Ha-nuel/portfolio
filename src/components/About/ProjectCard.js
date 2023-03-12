import styled from 'styled-components';

export default function ProjectCard({ project }) {
  return (
    <>
      <SlideCard>
        <ProfileName>{project.name}</ProfileName>
        <BreakLineStyle />
        <ProfileDescription>{project.description}</ProfileDescription>
      </SlideCard>
    </>
  );
}

const BreakLineStyle = styled.div`
  width: 0.1rem;
  height: 50%;
  background-color: lightgray;
  margin-top: 1rem;
`;

const SlideCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  height: 80%;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border: gray 0.25rem solid;
  border-radius: 50%;
`;

const ProfileName = styled.div`
  font-size: 2rem;
  font-family: elice-bold;
  width: 100%;
`;

const ProfilePos = styled.span`
  font-size: 1.25rem;
  font-family: elice-bold;
`;

const ProfileDescription = styled.div`
  margin-top: 2rem;
  width: 100%;
`;
