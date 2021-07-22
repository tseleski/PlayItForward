import styled from 'styled-components';
import { UnstyledLink } from '../styles';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 10px 60px;
  background: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 5;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.button`
  border-radius: 3px;
  background-color: #fff;
  height: 35px;
  color: #181818;
  border: 2px solid transparent;
  border-radius: 500px;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.76px;
  line-height: 18px;
  padding: 8px 34px;
  text-align: center;
  text-transform: uppercase;
  -webkit-transition: all 33ms cubic-bezier(.3,0,0,1);
  transition: all 33ms cubic-bezier(.3,0,0,1);
  white-space: nowrap;
  will-change: transform;
  margin-right: 10px;
`;

export const StyledLink = styled(UnstyledLink)`
  color: #D9DADC;
  margin-right: 20px;

  :hover {
    color: #68D962;
  }
`;

export * from '../styles';
