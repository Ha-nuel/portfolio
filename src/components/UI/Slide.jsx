import styled from 'styled-components';

export default function Slide({
  children,
  count,
  setCount,
  slideData,
  leftBtnHandler,
  rightBtnHandler,
}) {
  return (
    <>
      <SlideStyle>
        {children}
        <SlideButtons>
          <SlideButton onClick={leftBtnHandler}>&lt;</SlideButton>
          {slideData.map((member, index) => (
            <SlideNumber
              key={index}
              count={count}
              index={index}
              onClick={() => setCount(index)}
            />
          ))}
          <SlideButton onClick={rightBtnHandler}>&gt;</SlideButton>
        </SlideButtons>
      </SlideStyle>
    </>
  );
}

const SlideStyle = styled.div`
  height: 75%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const SlideButtons = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SlideNumber = styled.button`
  cursor: pointer;
  border: none;
  height: 1rem;
  width: 1rem;
  border: #6c63ff 1px solid;
  border-radius: 50%;
  background-color: ${({ count, index }) =>
    count === index ? '#6C63FF' : 'transparent'};
`;

const SlideButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  text-align: center;
  color: gray;
`;
