import React from 'react';
import {
  Buttons,
  HeaderWrapper,
  Logo,
  LogoWrapper,
  Name,
  StyledLink,
} from './styles';
import logo from '../spotify-logo.png';
import { authUrl } from '../../../helpers';

const Header: React.FC = () => (
  <HeaderWrapper>
    <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <Name>PlayItForward</Name>
    </LogoWrapper>
    <Buttons>
      <StyledLink href={authUrl}>Sign Up</StyledLink>
      <StyledLink href={authUrl}>Log In</StyledLink>
    </Buttons>
  </HeaderWrapper>
);

export default Header;
