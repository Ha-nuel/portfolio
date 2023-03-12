import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png';

export default function Logo() {
  return (
    <LogoStyle className='logo' src={LogoImage} onClick={() => navigate('/')} />
  );
}

const LogoStyle = styled.img`
  align-self: center;
  margin-left: 3rem;
  width: 6rem;
`;
