import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

import useSlide from '../hooks/useSlide.js';
import useDivideSection from '../hooks/useDivideSection.js';

import Slide from '../components/UI/Slide.jsx';
import ProfileCard from '../components/About/ProfileCard.jsx';

import TitleImage from '../assets/images/about-images/undraw_computer.svg';
import TitleWave from '../assets/images/about-images/wave.png';
import TeamImage from '../assets/images/about-images/undraw-engineering_team.svg';

import AboutImage from '../assets/images/user-icons/undraw_programmer_re_owql.svg';
import ProfileStacks from '../components/About/ProfileStacks.jsx';
import ProjectCard from '../components/About/ProjectCard.jsx';

const teamMembers = [
  {
    description: '여기까지 봐주셔서 감사합니다.',
  },
  {
    description: '모자란 부분이 있다면 바로 제게 알려주시면 감사하겠습니다.',
  },
  {
    description: '사실 이 부분은 같이 했던 팀원의 한마디를 적고 싶었지만...',
  },
  {
    description: '부족한 게 많지만 열심히 하겠습니다!',
  },
];

const projects = [
  {
    name: '포트폴리오 공유 사이트',
    description:
      '팀 프로젝트를 위한 감 잡기로 제작한 사이트입니다. 다른 유저의 포트폴리오를 확인할 수 있고, 사용자 본인의 포트폴리오도 추가할 수 있습니다.',
  },
  {
    name: '재활용 쇼핑몰 사이트',
    description:
      '자신이 더 이상 입지 않는 그러나 폐기되기에는 아까운 옷을 등록하여 나눔이 가능하도록 한 웹 서비스입니다. 새상품을 소비할 때의 효용 (다양한 상품 즐기기)을 유지하면서 비용을 들이지 않고 친환경적인 행동적 대안으로 `옷 나눔` 서비스를 제공하기 위한 목적으로 기획하였습니다.',
  },
  {
    name: '일기 공유 사이트',
    description:
      '사회가 고도로 발전함에 따라 서로 과시하려고만 하고 정작 본인에 감정을 돌아보는 일은 거의 없습니다. 그래서 저희 익명으로 일기라는 매체로 감정을 터놓을 수 있고, 공유할 수 있는 익명 SNS 서비스 마음일기를 기획하게 되었습니다.',
    detail:
      '프론트엔드 \n Typescript \n React \n Recoil \n React-query \n Styled-components',
  },
  {
    name: '커뮤니티 사이트',
    description:
      '지금까지 배웠던 것들을 총망라한 프로젝트입니다. recoil, react-query, MUI 등을 사용했고, CRUD, 로그인 및 회원가입, JWT 토큰, 쿠키 등의 기능이 있습니다',
    detail:
      '프론트엔드 \n Typescript \n React \n Recoil \n React-query \n Styled-components',
  },
];

export default function About() {
  const { count, setCount, startInterval, leftBtnHandler, rightBtnHandler } =
    useSlide(4000, 1, teamMembers.length);
  const {
    currentSection,
    scrollEventHandler,
    sections,
    innerHeight,
    subSection,
  } = useDivideSection(2);

  const slideProps = {
    count,
    setCount,
    slideData: projects,
    leftBtnHandler,
    rightBtnHandler,
  };

  useEffect(() => {
    startInterval();

    window.scrollTo(0, 0);
    window.addEventListener('scroll', scrollEventHandler);

    return () => window.removeEventListener('scroll', scrollEventHandler);
  }, []);

  return (
    <>
      <Container>
        <SubNav focusOn={currentSection !== 1}>
          <NavBtn
            onClick={() => window.scrollTo(0, 0)}
            active={currentSection === 1}
          >
            시작
          </NavBtn>
          <NavBtn
            onClick={() =>
              window.scrollTo(
                0,
                sections.firstSection - innerHeight / subSection
              )
            }
            active={currentSection === 2}
          >
            소개
          </NavBtn>
          <NavBtn
            onClick={() =>
              window.scrollTo(
                0,
                sections.secondSection - innerHeight / subSection
              )
            }
            active={currentSection > 2 && currentSection !== 7}
          >
            프로젝트
          </NavBtn>
          <NavBtn
            onClick={() =>
              window.scrollTo(
                0,
                sections.seventhSection - innerHeight / subSection
              )
            }
            active={currentSection === 7}
          >
            한줄 소감
          </NavBtn>
        </SubNav>
        <TitleSection focusOut={currentSection !== 1}>
          <TitleBackground>
            <Title>프론트엔드 개발자</Title>
            <Text>디자인과 코딩을 좋아합니다.</Text>
          </TitleBackground>
        </TitleSection>
        <AboutSection
          focusOn={currentSection === 2}
          focusOut={currentSection !== 2}
        >
          <div style={{ width: '60%', height: '60%' }}>
            <AboutTitle>안녕하세요. 제 이름은 이하늘입니다.</AboutTitle>
            <AboutText>
              어느새 처음으로 Visual Studio Code를 다뤘던 2022년이 지나고, 1년
              동안 여러가지 시행착오를 겪고 있는 코더입니다. 제가 코딩을 배우게
              된 계기는 끊임없이 발전하는 기술과 미래에 큰 영향을 미칠 수 있는
              분야라고 생각해서였습니다. 저는 궁금증이 많고 참지 못하는
              성격입니다. 제게 있어서는 큰 장점이자 단점이 될 수 있지만, 이를
              이용해 새로운 것을 배우고 발전하는 데에 힘쓰고 있습니다.
            </AboutText>
          </div>
          <div
            style={{
              width: '100%',
              height: '40%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ProfileImage src={AboutImage} />
              <div
                style={{
                  width: '50%',
                  fontFamily: 'elice-bold',
                  fontSize: '1.5rem',
                  marginTop: '0.5rem',
                  marginBottom: '1rem',
                }}
              >
                프론트엔드 디자이너
              </div>
              <div
                style={{
                  width: '100%',
                  marginBottom: '2rem',
                  fontSize: '1.25rem',
                }}
              >
                코드에 대한 탐구를 즐기며, 새로운 기술을 찾는 데 시간을 자주
                보냅니다.
              </div>
              <div
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                  fontSize: '1.25rem',
                  fontFamily: 'elice-bold',
                }}
              >
                다룰 줄 아는 기술
              </div>
              <div
                style={{
                  width: '100%',
                  marginBottom: '1.5rem',
                  fontSize: '1.25rem',
                }}
              >
                HTML/CSS, Javascript, React, Typescript
              </div>
              <ProfileStacks icons={['html', 'css', 'js', 'react']} />
              <div
                style={{
                  width: '100%',
                  marginBottom: '1rem',
                  fontSize: '1.25rem',
                  fontFamily: 'elice-bold',
                }}
              >
                개발 툴
              </div>
              <div
                style={{
                  width: '100%',
                  marginBottom: '12.5rem',
                  fontSize: '1.25rem',
                }}
              >
                Visual Studio Code
              </div>
            </div>
          </div>
        </AboutSection>

        <TestSection
          focusOn={currentSection === 3}
          focusOut={currentSection !== 3}
        >
          <TeamSubSection>
            <SlideCard>
              <ProjectPicture focusOn={currentSection === 3}>
                사진
              </ProjectPicture>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '80%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <ProfileName>{projects[0].name}</ProfileName>
                  <ProfileDescription>
                    {projects[0].description}
                  </ProfileDescription>
                  <StartBtn>깃헙 확인하기</StartBtn>
                </div>
              </div>
            </SlideCard>
          </TeamSubSection>
        </TestSection>
        <TestSection
          focusOn={currentSection === 4}
          focusOut={currentSection !== 4}
        >
          <TeamSubSection>
            <SlideCard>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '80%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <ProfileName>{projects[1].name}</ProfileName>
                  <ProfileDescription>
                    {projects[1].description}
                  </ProfileDescription>
                  <StartBtn>깃헙 확인하기</StartBtn>
                </div>
              </div>
              <ProjectRightPicture focusOn={currentSection === 4}>
                사진
              </ProjectRightPicture>
            </SlideCard>
          </TeamSubSection>
        </TestSection>
        <TestSection
          focusOn={currentSection === 5}
          focusOut={currentSection !== 5}
        >
          <TeamSubSection>
            <SlideCard>
              <ProjectPicture focusOn={currentSection === 5}>
                사진
              </ProjectPicture>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '80%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                  }}
                >
                  <ProfileName>{projects[2].name}</ProfileName>
                  <ProfileDescription>
                    {projects[2].description}
                  </ProfileDescription>
                  <StartBtn>깃헙 확인하기</StartBtn>
                </div>
              </div>
            </SlideCard>
          </TeamSubSection>
        </TestSection>
        <TestSection
          focusOn={currentSection === 6}
          focusOut={currentSection !== 6}
        >
          <TeamSubSection>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ProjectName>{projects[3].name}</ProjectName>
              <LastProjectPicture>사진</LastProjectPicture>
              <ProjectDescription>{projects[3].description}</ProjectDescription>
              <StartBtn>보러가기</StartBtn>
            </div>
          </TeamSubSection>
        </TestSection>
        <TeamSection
          focusOn={currentSection === 7}
          focusOut={currentSection !== 7}
        >
          <TeamSubSection>
            <Slide {...slideProps}>
              <ProfileCard teamMember={teamMembers[count]} />
            </Slide>
          </TeamSubSection>
        </TeamSection>
      </Container>
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
  width: 80%;
`;

const ProfileName = styled.div`
  font-size: 2rem;
  font-family: elice-bold;
  width: 100%;
`;

const ProjectName = styled.div`
  font-size: 2rem;
  font-family: elice-bold;
  width: 50%;
  text-align: center;
`;

const ProjectDescription = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 50%;
`;

const ProfileDescription = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const ProjectPicture = styled.div`
  width: 100%;

  ${({ focusOn }) =>
    focusOn &&
    css`
      animation: ${FadeInLeft} 1s;
    `}
`;

const ProjectRightPicture = styled.div`
  width: 100%;

  ${({ focusOn }) =>
    focusOn &&
    css`
      animation: ${FadeInRight} 1s;
    `}
`;

const LastProjectPicture = styled.div`
  margin-top: 2rem;
  width: 50%;
  text-align: center;
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const FadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const FadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const FadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
const FadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(1);
  }
`;

const ProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border: gray 0.25rem solid;
  border-radius: 50%;
`;

const Container = styled.div`
  height: 670vh;
  display: flex;
  flex-direction: column;
`;

const SubNav = styled.ul`
  z-index: 9;
  &:first-child {
    margin-left: 3rem;
  }
  visibility: hidden;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 2rem;
  list-style: none;
  animation: ${FadeOut} 0.5s forwards;

  ${({ focusOn }) =>
    focusOn &&
    css`
      visibility: visible;
      animation: ${FadeInDown} 1s;
    `}
`;

const NavBtn = styled.li`
  z-index: 9;
  cursor: pointer;
  margin-right: 1rem;
  border-radius: 20px;
  padding: 4px 20px;
  margin-left: ${({ margin }) => margin};
  color: ${({ active }) => (active ? 'white' : '')};
  background-color: ${({ active }) => (active ? '#6C63FF' : '')};
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || '100vh'};
  animation: ${({ animation }) => animation} 1s;

  ${({ focusOut }) =>
    focusOut &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;

const TitleSection = styled(Section)`
  height: 90vh;
  flex-direction: column;
  background-image: url(${TitleWave});
  background-position: 0 100%;
  background-size: 100% 20%;
  background-repeat: repeat-x;
  animation: ${FadeInUp} 0.5s;

  ${({ focusOut }) =>
    focusOut &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;

const TitleBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${TitleImage});
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: 40%;
  animation: ${FadeInUp} 1s;
`;

const Title = styled.div`
  margin-top: 8rem;
  font-family: 'elice-bold';
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Text = styled.div`
  font-family: 'elice';
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.div`
  font-family: 'elice-bold';
  font-size: 2rem;
  margin-top: 10rem;
  margin-bottom: 3rem;
  color: white;
`;

const AboutText = styled.div`
  font-family: 'elice';
  font-size: 1.25rem;
  color: white;
`;

const TestSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: row;

  ${({ focusOn }) =>
    focusOn &&
    css`
      animation: ${FadeIn} 1s;
    `}
`;

const AboutSection = styled(Section)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #6c63ff 50%, white 50%);
  ${({ focusOn }) =>
    focusOn &&
    css`
      animation: ${FadeIn} 1s;
    `};
`;

const TeamSection = styled(Section)`
  height: 80vh;
  background-image: url(${TeamImage});
  background-size: 30%;
  background-position: 10% 90%;
  background-repeat: no-repeat;

  ${({ focusOn }) =>
    focusOn &&
    css`
      animation: ${FadeIn} 1s;
    `}

  ${({ focusOut }) =>
    focusOut &&
    css`
      animation: ${FadeOut} 0.5s forwards;
    `}
`;

const TeamSubSection = styled(Section)`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
