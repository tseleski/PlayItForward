import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #131313;
  position: absolute;
  top: 0;
  left: 250px;
  bottom: 0;
  right: 0;
  overflow: auto;
  padding-bottom: 125px;
`;

export const Title = styled.div`
  margin: 40px 0 0 40px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: .01em;
  line-height: 28px;
  text-transform: none;
`;

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TileWrapper = styled.div`
  height: 240px;
  background: #181818;
  border-radius: 4px;
  flex: 1;
  max-width: 200px;
  isolation: isolate;
  padding: 16px;
  position: relative;
  transition: background-color .3s ease;
  width: 100%;
  margin: 24px;
  cursor: pointer;

  :hover {
    background: #242424;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlaylistTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 24px;
  margin-top: 16px;
`;

export const BackCircle = styled.div`
  background: black;
  height: 35px;
  width: 35px;
  border-radius: 25px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin: 20px 0 40px 0px;
  padding-bottom: 2px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: #464646;
  max-height: 340px;
  padding: 20px;
  position: sticky;
  top: 0;
`;

export const TopContentWrapper = styled.div`
  display: flex;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: flex-end;
`;

export const Header = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`;

export const Name = styled.div`
  font-size: 72px;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
  margin-left: -5px;
  max-width: 800px;
  overflow: hidden;
`;

export const Details = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 14px;
`;

export const Owner = styled.div`
  font-weight: 700;
`;

export const SongNumber = styled.div`
  font-weight: 300;
  margin-left: 5px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 40px;
  overflow: auto;

  th {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: .1em;
    line-height: 16px;
    text-transform: uppercase;
    color: #B3B3B3;
    text-align: left;
  }
`;

export const RemoveTD = styled.td`
  cursor: pointer;
  padding-left: 20px;
`;

export * from '../Footer/styles';
