import Logo from './Logo';

import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
    </>
  );
}

const HeaderStyle = styled.header`
  height: 10vh;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
