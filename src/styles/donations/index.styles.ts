import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerSearch = styled.div`
  
`;

export const Search = styled.input`
  background: #ADD5F7;
  padding: 20px;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  outline: none;
  font-size: 20px;

  width: 736px;
  height: 73px;`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 736px;
  flex-wrap: wrap;
  margin: 10px;
`;

export const BigButton = styled.button`
  margin: 10px 0px;
  width: 736px;
  height: 105px;
  font-size: 20px;

  border: 0px;
  padding: 10px 25px;
  border-radius: 3px;
  font-weight: bold;

  background: #3DDEC4;
  color: #000;

  &:hover {
    background: #3DDEC490;
    color: #fff;
    cursor: pointer;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  border: 0px;
  padding: 10px 25px;
  border-radius: 3px;
  font-weight: bold;

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  font-size: 15px;

  background: #3DDEC4;
  color: #000;

  &:hover {
    background: #3DDEC490;
    color: #fff;
    cursor: pointer;
  }
`;

export const Card = styled.div`
  display: flex; 
  flex-direction: column;
  
  border-radius: 5px;

  background: #ECECEC;
  max-width: 736px;
  width: 100%;
  
  color: #000;

  margin-bottom: 40px;
`;

export const ContainerFirstPart = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px;
  padding: 0px 40px;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  
`;

export const Image = styled.div`
  background: #000;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const CardImageContainer = styled.div`
  padding: 0px 40px;
`;

export const ButtonsCardImage = styled.div``;

export const CardImage = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 5px;
  padding: 20px;
  background: #000;
`;

export const CardDescriptionContainer = styled.div`
  padding: 40px;
`;

export const CardName = styled.label`
  font-size: 20px;
`;

export const CardAdress = styled.label``;

export const CardDescription = styled.div``;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;
  background: #7FB2F0;
  border-radius: 5px;
`;