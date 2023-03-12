import styled from 'styled-components';

export default function ProjectCard({ project }) {
  return (
    <>
      <SlideCard>
        <ProjectPicture>사진</ProjectPicture>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '50%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <ProfileName>{project.name}</ProfileName>
          <ProfileDescription>{project.description}</ProfileDescription>
          <StartBtn>보러가기</StartBtn>
        </div>
      </SlideCard>
    </>
  );
}

const StartBtn = styled.button`
  cursor: pointer;
  padding: 4px 24px;
  font-size: 1.25rem;
  font-family: 'elice-bold';
  color: white;
  background-color: #6c63ff;
  border: #6c63ff 1px solid;
  border-radius: 20px;
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

const ProfileName = styled.div`
  font-size: 2rem;
  font-family: elice-bold;
  width: 100%;
`;

const ProfileDescription = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 50%;
`;

const ProjectPicture = styled.div`
  width: 100%;
`;
