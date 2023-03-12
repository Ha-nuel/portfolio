import styled from 'styled-components';
import stackIcons from './StackIcons';

export default function ProfileStacks({ icons }) {
  return (
    <ProfileStacksStyle>
      {icons.map((icon, index) => (
        <ProfileStackIcon key={index} src={stackIcons[icon]} />
      ))}
    </ProfileStacksStyle>
  );
}

const ProfileStacksStyle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const ProfileStackIcon = styled.img`
  width: 3rem;
  height: 3rem;
  fill: ${({ color }) => color};
`;
