import styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = styled.div``;

export const Form = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 800px;
  background: #ADD5F7;
`;

export const TitlePartForm = styled.label`
  margin: 20px;
  grid-column: 2/9;

  font-size: 30px;
  color: #000;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  grid-column: 2/5;

  width: 600px;
  margin: 20px;

  display: flex;
  flex-direction: column;
`;

export const InputTitle = styled.div`
  color: #000;
`;

export const InputType = styled.input`
  margin: 10px 0px;
  height: 55px;
  border-radius: 5px;
  border: 0px;
  padding: 20px;

  font-weight: bold;
  font-size: 20px;
  outline: none;
`;

export const InputTypeSmall = styled.input`
  margin: 10px 0px;
  height: 55px;
  width: 50%;
  border-radius: 5px;
  border: 0px;
  padding: 20px;

  font-weight: bold;
  font-size: 20px;
  outline: none;
`;

export const BottonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);

  background: #35478C;
`;

export const ButtonsContainer = styled.div`
  grid-column: 2/10;
  grid-row: 4/4;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Info = styled.label`
  grid-column: 2/5;
  grid-row: 2/2;
`;

export const Term = styled.label`
  grid-column: 2/5;
  grid-row: 3/3;
`;