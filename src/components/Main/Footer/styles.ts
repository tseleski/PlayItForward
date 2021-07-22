import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px 40px;
  width: 100%;
  height: 100px;
  background: #191919;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 2;
`;

export const NoSongsWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  font-weight: 400;
  letter-spacing: 0.1em;
`;

export const Left = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Track = styled.div<{
  small?: boolean;
}>`
  font-size: ${p => p.small ? '14px' : '18px'};
  font-weight: 700px;
  margin-bottom: 5px;
`;

export const Artist = styled.div<{
  small?: boolean;
}>`
  font-size: ${p => p.small ? '12px' : '14px'};
  font-weight: 400px;
`;

export const AlbumImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

export const AddWrapper = styled.div`
  position: relative;
`;

export const Plus = styled.div`
  background: white;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  color: #191919;
  margin-right: 5px;
  box-sizing: border-box;
  padding-left: 5px;
`;

export const AddButton = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

export const PlaylistDropdown = styled.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  background: #313131;
  color: white;
  border-radius: 3px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  min-width: 250px;
  max-height: 400px;
  overflow: auto;
  cursor: pointer;
`;

export const DropdownItem = styled.div`
  height: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 260px;
  white-space: nowrap;
  border-radius: 3px;
  padding: 10px 20px;

  :hover {
    background: #3D3D3D;
  }
`;

export const StyledInput = styled.input`
  outline: none;
  text-indent: 5px;
  padding: 5px 10px;
  margin: 10px 10px 10px 0;

  :focus {
    outlline: none;
  }
`;

export const AddSong = styled.div`
  padding: 10px 20px;
  font-weight: 700;
  font-size: 14px;
`;

export const ButtonWrapper = styled.span`
  background: white;
  color: #313131;
  padding: 5px 10px;
  border-radius: 3px;
`;

export * from '../styles';
