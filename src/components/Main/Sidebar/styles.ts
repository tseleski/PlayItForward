import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 250px;
  background: #000000;
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MenuWrapper = styled.div`
  margin-top: 100px;
  color: #BEBEBE;
`;

export const MenuItem = styled.div<{
  selected?: boolean;
}>`
  font-size: 24px;
  margin-bottom: 20px;
  cursor: pointer;
  background: ${p => p.selected ? '#282828' : 'inherit'};
  border-radius: 3px;
  padding: 5px 10px;
  color: ${p => p.selected ? 'white' : 'inherit'};

  :hover {
    color: white;
  }
`;

export const Logout = styled(MenuItem)`
  position: absolute;
  bottom: 150px;
`;

export * from '../styles';
