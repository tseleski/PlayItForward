import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  background: white;
  color: #F1F1F1;
  font-family: Helvetica, Arial, sans-serif;
`;

export const UnstyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 24px;
  width: 24px;
`;

export const Name = styled.div`
  margin: 20px 0 40px 5px;
  font-size: 24px;
`;

export const Page = styled.div`
  background-color: #2941AB;
  color: #68D962;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 70px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  padding: 0 200px;
`;

export const TextBig = styled.div`
  font-size: 104px;
`;

export const TextSmall = styled.div`
  margin: 20px 0;
  font-size: 18x;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 40px;
  cusor: pointer;
`;

export const GetButton = styled.div`
  color: #2941AB;
  background-color: #68D962;
  border-radius: 18px;
  width: fit-content;
  padding: 10px 20px;

  :hover {
    color: white;
  }
`;

export const Circle1 = styled.div`
  position: absolute;
  top: -56px;
  right: 0;
  height: 250px;
  width: 250px;
  background: #68D962;
  border-radius: 0 0 0 400px;
`;

export const Circle2 = styled.div`
  position: absolute;
  bottom: 0;
  left 0;
  height: 275px;
  width: 275px;
  background: #68D962;
  border-radius: 0 400px 0 0;
`;
