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
    name: '이하늘',
    gender: 'male',
    pos: '프론트엔드',
    description: '부족한 게 많지만 열심히 하겠습니다!',
    stacks: ['html', 'css', 'js', 'react'],
  },
];

const projects = [
  {
    name: '포트폴리오 공유 사이트',
    description: '생략',
  },
  {
    name: '재활용 쇼핑몰 사이트',
    description: '생략',
  },
  {
    name: '일기 공유 사이트',
    description: '생략',
  },
];

export default function About() {
  const { count, setCount, startInterval, leftBtnHandler, rightBtnHandler } =
    useSlide(false, 1, projects.length);
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
            active={currentSection === 3}
          >
            프로젝트
          </NavBtn>
          <NavBtn
            onClick={() =>
              window.scrollTo(
                0,
                sections.fourthSection - innerHeight / subSection
              )
            }
            active={currentSection === 4}
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
            <Slide {...slideProps}>
              <ProjectCard project={projects[count]} />
            </Slide>
          </TeamSubSection>
        </TestSection>
        <TeamSection
          focusOn={currentSection === 4}
          focusOut={currentSection !== 4}
        >
          <TeamSubSection>
            <ProfileCard teamMember={teamMembers[0]} />
          </TeamSubSection>
        </TeamSection>
      </Container>
    </>
  );
}

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
  height: 370vh;
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
